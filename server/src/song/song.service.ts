import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import "reflect-metadata";
import { DeepPartial } from "typeorm";
import { HttpError } from "../errors/httpError.ts";
import s3Service from "../s3-service/s3Service.ts"
import {GENERAL_S3_PATH} from "./song.consts.ts";
import { Song } from "./song.entity.ts";
import { S3File, S3FileDescriptor } from "../s3-service/s3service.types.ts";
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

  const songMp3 = await s3Service.getFile(song.s3Url);

  return songMp3;
};

const addSong = async (song: DeepPartial<Song>) => {
  const path =  GENERAL_S3_PATH + `${song.name}`;
  const s3Url = await s3Service.getFileOneTimeUrl(path);
  song.s3Url = s3Url;
  Song.save(Song);
  return song;
};

const addMp3File = async(file: Express.Multer.File, title: string) => {
  const myDescription: S3FileDescriptor = { name: title, extension: "mp3", path: GENERAL_S3_PATH, contentType: "audio/mpeg" };

  const myfile: S3File = { name: title, extension: "mp3", path: GENERAL_S3_PATH, contentType: "audio/mpeg", content: file.buffer };

  const saveUrl = await s3Service.initializeCleanerApi(myDescription);

  await s3Service.uploadFile(saveUrl, myfile, myfile.contentType);
}

export default { getAllSongs, getSongByUuid, addSong, getSongMp3ByUuid, addMp3File };
