import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";
import { Song } from "./song.entity.ts";
import { DeepPartial } from "typeorm";
import { downloadFromS3Url, getFile, getFileOneTimeUrl, GetFileResult } from "../s3ServiceTest.ts";
import dotenv from "dotenv";
import "reflect-metadata";
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

  const songMp3 = await getFile( song.s3Url)

  return songMp3;
};

const addSong = async (song: DeepPartial<Song>) => {
  const path = `noa/test/${song.name}`
  const s3Url = await getFileOneTimeUrl(path);
  song.s3Url = s3Url;
  Song.save(Song);
  return song;
};

export default { getAllSongs, getSongByUuid, addSong, getSongMp3ByUuid };
