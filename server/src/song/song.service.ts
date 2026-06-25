import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";
import { Song } from "./song.entity.ts";
import { DeepPartial } from "typeorm";

const getAllSongs = () => Song.find();

const getSongByUuid = async (uuid: string) => {
  const song = await Song.findOneBy({ uuid });

  if (!song) {
    throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
  }

  return song;
};

const addSongToPersonalPlaylist =  (song: DeepPartial<Song>) => Song.save(Song);

export default { getAllSongs, getSongByUuid, addSongToPersonalPlaylist };
