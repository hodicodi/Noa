import { uploadFile } from "./s3-service/s3Service.tsx";
import { getAccessToken } from "./s3-service/s3Service.tsx";
import axios from "axios";

// 1. Content data (Array of strings, ArrayBuffers, or Blobs)

export const initializeCleanerApi = async () => {
  // 1. קבלת טוקן גישה
  const accessToken = await getAccessToken();
  console.log(accessToken);

  // 2. יצירת Axios instance עם Headers
  const cleanerApi = axios.create({
    baseURL: process.env.CLEANER_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-apikey": process.env.DIGIKEY,
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  // 3. קריאה ל-API להעלאת קובץ
  const response = await cleanerApi.put("/file/upload", {
    file_name: "welcome",
    file_type: ".txt",
    bucket_identifiers: [process.env.BUCKET_IDENTIFIERS],
    destination_path: "/noa/test/welcome",
  });

  if (!response.data || !response.data.url) {
    throw new Error("Failed to get upload location (URL missing in response)");
  }


  const fileContent = "Hello, welcome to this dynamically created file!";

  uploadFile(response.data.url, fileContent, "text/plain");  
};

