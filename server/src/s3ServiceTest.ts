import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import dotenv from "dotenv";
import querystring from "node:querystring";
import { Readable } from "typeorm/platform/PlatformTools.js";
import { HttpError } from "./errors/httpError.ts";
import { StatusCodes } from "http-status-codes";
import { Song } from "./song/song.entity.ts";
import { DeepPartial } from "typeorm";

dotenv.config();


const {
  APIGEE_BASE_URL = "",
  TOKEN_ENDPOINT = "",
  DIGIKEY = "",
  DIGISECRET = "",
  CLEANER_API_BASE_URL = "",
  BUCKET_IDENTIFIERS = "",
  BUCKET_NAME = "",
  AWS_ACCESS_KEY_ID = "",
  AWS_SECRET_ACCESS_KEY = "",
} = process.env;

// 1. Content data (Array of strings, ArrayBuffers, or Blobs)
export const getAccessToken = async () => {
  const tokenUrl = `${APIGEE_BASE_URL}${TOKEN_ENDPOINT}`;

  console.log("--- 🔑 Retrieving access token... ---");

  try {
    const response = await axios.post(tokenUrl, querystring.stringify({ grant_type: "client_credentials" }), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: DIGIKEY, password: DIGISECRET },
    });

    console.log("✅ Token received successfully.");
    return response.data.access_token;
  } catch (error) {
    console.error("Failed to retrieve token:");
    throw new Error("Failed to authenticate with Apigee");
  }
};

const cleanerApi = axios.create({
  baseURL: process.env.CLEANER_API_BASE_URL,
  headers: {
    //   Authorization: `Bearer ${accessToken}`,
    "x-apikey": process.env.DIGIKEY,
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

cleanerApi.interceptors.request.use(async (req) => {
  const accessToken = await getAccessToken();

  req.headers.Authorization = `Bearer ${accessToken}`;
  return req;
});

export const initializeCleanerApi = async (myDescription: S3FileDescriptor) => {
  try {
    const response = await cleanerApi.put("/file/upload", {
      file_name: myDescription.name,
      file_type: myDescription.extension,
      bucket_identifiers: [process.env.BUCKET_IDENTIFIERS],
      destination_path: myDescription.path,
    });
    if (!response.data || !response.data.url) {
      throw new Error("Failed to get upload location (URL missing in response)");
    }

    console.log("✅ Signed URL received successfully.");
    return response.data.url;
  } catch (e) {
    console.log(e);
  }
};

export type S3FileDescriptor = {
  name: string;
  extension: string;
  path: string;
  contentType?: string;
};

export type S3File = S3FileDescriptor & {
  content: Buffer;
};

export type FileToUpload = S3FileDescriptor & {
  Buffer: Buffer;
};

export const uploadFile = async (uploadUrl: string, file: S3File, contentType?: string) => {
  const { content } = file;
  return axios.put(uploadUrl, content, {
    headers: { "Content-Type": contentType || "application/octet-stream" },
  });
};

// Creating the File object

export const testFileUpload = async () => {
  const myDescription: S3FileDescriptor = { name: "example2", extension: "pdf", path: "noa/test", contentType: "application/pdf" };

  const myfile: S3File = { name: "example2", extension: "pdf", path: "noa/test", contentType: "application/pdf", content: Buffer.from("Hello, S3!") };

  uploadFile(await initializeCleanerApi(myDescription), myfile, myfile.contentType);
};


const client = new S3Client({
  region: "il-central-1",
});

export const getFileOneTimeUrl = async (path: string): Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
  });

  const url = await getSignedUrl(client, command, { expiresIn: 60 });

  return url;
};

export type GetFileResult = {
  contentType: string;
  body: Readable; // a Node stream
};

export const getFile = async (path: string)  => {
  const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: path });

  const file = await client.send(command);
  const body = file.Body;

  return { body, contentType: file.ContentType || "" };
};

export const downloadFromS3Url = async (url: string, outputPath: string): Promise<Buffer> => {
  // 1. Fetch the file data from the S3 URL
  console.log("full path:" + "https://" + url + ".s3.il-central-1.amazonaws.com" + outputPath);
  const response = await fetch("https://" + url + ".s3.il-central-1.amazonaws.com"   + outputPath);

  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }

  // 2. Extract data as an ArrayBuffer and convert it to a Buffer
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return buffer;
};

export const getAllSongs = () => Song.find();

export const getSongByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  return song;
};


export const getSongMp3ByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  const songMp3: Buffer = await downloadFromS3Url(process.env.BUCKET_NAME!, song.s3Url)

  return songMp3;
};

export const addSong = async (song: DeepPartial<Song>) => {
  const path = `noa/test/${song.name}`
  const s3Url = await getFileOneTimeUrl(path);
  song.s3Url = s3Url;
  Song.save(Song);
  return song;
};


