import { StatusCodes } from "http-status-codes";
import { DeepPartial } from "typeorm";
import { HttpError } from "../errors/httpError.ts";
import { Song } from "../song/song.entity.ts";
import { Album } from "./album.entity.ts";

const getAllAlbums = () => Album.find();

const getAlbumById = async (uuid: string) => {
  const album = await Album.findOne({
    where: { uuid: uuid },
    relations: {
      songs: true,
      artist: true,
    },
  });

  if (!album) {
    throw new HttpError(StatusCodes.NOT_FOUND, "album not found");
  }

  return album;
};

const createAlbum = async (album: DeepPartial<Album>) => {
  return Album.save(album);
};

export default { getAllAlbums, getAlbumById, createAlbum };
