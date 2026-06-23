import { personalPlaylistType } from "../enums/personalPlaylistType.enum";
import { User } from "./user.type";

export type PersonalPlaylist = {
  uuid: string
  name: string;
  type: personalPlaylistType;
  user: User
}

export type PersonalPlaylistRes = {
  personalPlaylist: PersonalPlaylist | null
}

export type PersonalPlaylistParams = {
  uuid: string;
}

export type PersonalPlaylistsRes = {
  personalPlaylists: PersonalPlaylist[] | null
}

export type SavePersonalPlaylistsReqBody = {
  name: string;
  type: personalPlaylistType;
  user: User;
}