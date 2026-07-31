import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import "reflect-metadata";
import { DeepPartial, ILike, Raw } from "typeorm";
import { HttpError } from "../errors/httpError.ts";
import s3Service from "../s3-service/s3Service.ts";
import { Song } from "./song.entity.ts";
import { S3File, S3FileDescriptor } from "../s3-service/s3service.types.ts";
import { GENERAL_S3_PATH } from "./song.consts.ts";
import { RECORD_EXT } from "@shared/src/const/fileExtensions.consts.ts";
dotenv.config();

const getAllSongs = () => Song.find();

const getSongByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  return song;
};

const getSongRecordByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  const songRecord = await s3Service.getFile(song.s3Url);

  return songRecord;
};

const addSong = async (song: DeepPartial<Song>) => {
  const path = GENERAL_S3_PATH + `${song.name}`;
  const s3Url = await s3Service.getFileOneTimeUrl(path);
  song.s3Url = s3Url;
  Song.save(song);
  return song;
};

const getSongsWithQuery = async (searchQuery: string) =>
  await Song.find({
    where: [
      { name: ILike(`%${searchQuery}%`) },
      { album: { name: ILike(`%${searchQuery}%`) } },
      {
        genre: Raw((alias) => `CAST(${alias} AS TEXT) ILIKE :value`, {
          value: `%${searchQuery}%`,
        }),
      },
    ],
    relations: {
      album: true,
    },
  });

const addRecordFile = async (file: Express.Multer.File, title: string) => {
  const myDescription: S3FileDescriptor = { name: title, extension: `${RECORD_EXT}`, path: GENERAL_S3_PATH, contentType: "audio/mpeg" };

  const myfile: S3File = { name: title, extension: `${RECORD_EXT}`, path: GENERAL_S3_PATH, contentType: "audio/mpeg", content: file.buffer };

  const saveUrl = await s3Service.initializeCleanerApi(myDescription);

  await s3Service.uploadFile(saveUrl, myfile, myfile.contentType);
};

export default { getAllSongs, getSongByUuid, addSong, getSongRecordByUuid, addRecordFile, getSongsWithQuery };
