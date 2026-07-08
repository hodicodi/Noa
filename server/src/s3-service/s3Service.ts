import { GetObjectCommand, NoSuchKey, S3Client, S3ServiceException } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import dotenv from "dotenv";
import querystring from "node:querystring";
import { Readable } from "typeorm/platform/PlatformTools.js";
import { initializeCleanerApi, S3File } from "../s3ServiceTest.ts";
import * as fs from "fs/promises";
import { authConfig } from "oauth-entra-id/express";





/*
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
*/


/*
export const getUploadStatus = async (upload_id: string) => {
  const response = await cleanerApi.get(`/get?upload_id=${upload_id}`);

  if (!response.data) {
    throw new Error("Failed to get upload information");
  }

  return response.data;
};
*/

