import { DeepPartial } from "typeorm";
import { Song } from "../song/song.entity.ts";
import { PersonalPlaylist } from "./personalPlaylist.entity.ts";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";

const getAllPersonalPlaylists = () => PersonalPlaylist.find();

const getPersonalPlaylistById = async (uuid: string) => {
  const personalPlaylist = await PersonalPlaylist.findOneBy({ uuid });

  if (!personalPlaylist) {
    throw new HttpError(StatusCodes.NOT_FOUND, "personalPlaylist not found");
  }

  return personalPlaylist;
};

const createPersonalPlaylist = (personalPlaylist: DeepPartial<PersonalPlaylist>) =>
  PersonalPlaylist.save(personalPlaylist);

export default { getAllPersonalPlaylists, getPersonalPlaylistById, createPersonalPlaylist };
