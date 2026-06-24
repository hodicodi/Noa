import { DeepPartial } from "typeorm";
import { Artist } from "./artist.entity.ts";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";

const getAllArtists = () => Artist.find();

const getArtistById = async (uuid: string) => {
  const artist = await Artist.findOneBy({ uuid });

  if (!artist) {
    throw new HttpError(StatusCodes.NOT_FOUND, "artist not found");
  }

  return artist;
};

const createArtist = (artist: DeepPartial<Artist>) => Artist.save(artist);


export default { getAllArtists, getArtistById, createArtist };
