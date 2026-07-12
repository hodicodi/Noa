import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import "reflect-metadata";
import { DeepPartial } from "typeorm";
import { HttpError } from "../errors/httpError.ts";
import { getFile, getFileOneTimeUrl, initializeCleanerApi, S3File, S3FileDescriptor, uploadFile } from "../s3-service/s3Service.ts";
import generalS3Path from "./song.consts.ts";
import { Song } from "./song.entity.ts";
dotenv.config();

const getAllSongs = () => Song.find();

const getSongByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  return song;
};

const getSongMp3ByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  const songMp3 = await getFile(song.s3Url);

  return songMp3;
};

const addSong = async (song: DeepPartial<Song>) => {
  const path =  generalS3Path + `${song.name}`;
  const s3Url = await getFileOneTimeUrl(path);
  song.s3Url = s3Url;
  Song.save(Song);
  return song;
};

const addMp3File = async(file: Express.Multer.File, title: string) => {
  const myDescription: S3FileDescriptor = { name: title, extension: "mp3", path: generalS3Path, contentType: "audio/mpeg" };

  const myfile: S3File = { name: title, extension: "mp3", path: generalS3Path, contentType: "audio/mpeg", content: file.buffer };

  const saveUrl = await initializeCleanerApi(myDescription);

  await uploadFile(saveUrl, myfile, myfile.contentType);
}

export default { getAllSongs, getSongByUuid, addSong, getSongMp3ByUuid, addMp3File };
