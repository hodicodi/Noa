import { Readable } from "typeorm/platform/PlatformTools.js";

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

export type GetFileResult = {
  contentType: string;
  body: Readable;
};