import axios from "axios";
import dotenv from "dotenv";
import querystring from "node:querystring";
import { File } from "node:buffer";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
dotenv.config();

const {
  APIGEE_BASE_URL = "",
  TOKEN_ENDPOINT = "",
  DIGIKEY = "",
  DIGISECRET = "",
  CLEANER_API_BASE_URL = "",
  BUCKET_IDENTIFIERS = "",
  BUCKET_NAME = "",
} = process.env;

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

// 2. יצירת Axios instance עם Headers
const accessToken = await getAccessToken();
console.log("accessToken: " + accessToken);

const cleanerApi = axios.create({
  baseURL: CLEANER_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "x-apikey": DIGIKEY,
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const uploadFile = async (uploadUrl: string, content: string, contentType: string) => {
  return axios.put(uploadUrl, content, {
    headers: { "Content-Type": contentType || "application/octet-stream" },
  });
};

export const getUploadStatus = async (upload_id: string) => {
  const response = await cleanerApi.get(`/get?upload_id=${upload_id}`);

  if (!response.data) {
    throw new Error("Failed to get upload information");
  }

  return response.data;
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

  return url
};
