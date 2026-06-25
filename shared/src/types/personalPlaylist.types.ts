import { PersonalPlaylistType } from "../enums/personalPlaylistType.enum";
import { Song } from "./song.types";
import { User } from "./user.type";

export type PersonalPlaylist = {
  uuid: string;
  name: string;
  type: PersonalPlaylistType;
  user: User;
};

export type PersonalPlaylistRes = {
  personalPlaylist: PersonalPlaylist | null;
};

export type PersonalPlaylistsRes = {
  personalPlaylists: PersonalPlaylist[] | null;
};

export type SavePersonalPlaylistReqBody = {
  personalPlaylist: SavePersonalPlaylist;
};

export type SavePersonalPlaylist = {
  name: string;
  type: PersonalPlaylistType;
  user: User;
  songs?: Song[];
};
