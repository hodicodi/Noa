import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import dotenv from "dotenv";
import querystring from "node:querystring";
import { S3File, S3FileDescriptor } from "./s3service.types.ts";

dotenv.config();

const { APIGEE_BASE_URL = "", TOKEN_ENDPOINT = "", DIGIKEY = "", DIGISECRET = "", BUCKET_NAME = "" } = process.env;

const getAccessToken = async () => {
  const tokenUrl = `${APIGEE_BASE_URL}${TOKEN_ENDPOINT}`;

  const response = await axios.post(tokenUrl, querystring.stringify({ grant_type: "client_credentials" }), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    auth: { username: DIGIKEY, password: DIGISECRET },
  });

  return response.data.access_token;
};

const cleanerApi = axios.create({
  baseURL: process.env.CLEANER_API_BASE_URL,
  headers: {
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

const initializeCleanerApi = async (myDescription: S3FileDescriptor) => {
  const response = await cleanerApi.put("/file/upload", {
    file_name: myDescription.name,
    file_type: myDescription.extension,
    bucket_identifiers: [process.env.BUCKET_IDENTIFIERS],
    destination_path: myDescription.path,
  });
  if (!response.data || !response.data.url) {
    throw new Error("Failed to get upload location (URL missing in response)");
  }

  return response.data.url;
};

const uploadFile = async (uploadUrl: string, file: S3File, contentType?: string) => {
  const { content } = file;
  return axios.put(uploadUrl, content, {
    headers: { "Content-Type": contentType || "application/octet-stream" },
  });
};

const client = new S3Client({
  region: "il-central-1",
});

const getFileOneTimeUrl = async (path: string): Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
  });

  const url = await getSignedUrl(client, command, { expiresIn: 60 });

  return url;
};

const getFile = async (path: string) => {
  const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: path });

  const file = await client.send(command);
  const body = file.Body;

  return { body, contentType: file.ContentType || "" };
};

const downloadFromS3Url = async (url: string, outputPath: string): Promise<Buffer> => {
  const response = await fetch("https://" + url + ".s3.il-central-1.amazonaws.com" + outputPath);

  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return buffer;
};

export default {getFileOneTimeUrl, initializeCleanerApi, getFile, downloadFromS3Url, uploadFile, getAccessToken}