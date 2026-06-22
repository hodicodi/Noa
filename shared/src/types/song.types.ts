import { songType } from "../enums/songType.enum";
import { PersonalPlaylist } from "../../../server/src/personalPlaylist/personalPlaylist.entity.ts";
import { Album } from "../../../server/src/album/album.entity.ts";

export type Song = {
  uuid: string
  name: string;
  publishDate: string;
  genre: songType;
  personalPlaylist: PersonalPlaylist;
  album: Album
}

export type SongRes = {
  song: Song | null
}

export type SongParams = {
  uuid: string;
}

export type SongsRes = {
  songs: Song[] | null
}