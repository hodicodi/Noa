import { uploadFile } from "./s3-service/s3Service.tsx";
import { getAccessToken } from "./s3-service/s3Service.tsx";
import axios from "axios";

// 1. Content data (Array of strings, ArrayBuffers, or Blobs)

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

// Creating the File object

export const testFileUpload = async () => {
  const myDescription: S3FileDescriptor = { name: "example2", extension: "pdf", path: "noa/test", contentType: "application/pdf" };

  const myfile: S3File = { name: "example2", extension: "pdf", path: "noa/test", contentType: "application/pdf", content: Buffer.from("Hello, S3!") };

  uploadFile(await initializeCleanerApi(myDescription), myfile, myfile.contentType);
};
