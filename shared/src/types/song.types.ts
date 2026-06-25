import { Album } from "./album.types.ts";
import { SongType } from "../enums/songType.enum";

export type Song = {
  uuid: string;
  name: string;
  publishDate: string;
  genre: SongType;
  album: Album;
};

export type SongRes = {
  song: Song | null;
};

export type SongsRes = {
  songs: Song[] | null;
};

export type AddSongToAlbumReqBody = {
  song: AddSongToAlbum;
};

export type AddSongToAlbum = {
  name: string;
  publishDate: string;
  genre: SongType;
  album: {
    uuid: string;
  };
};

export type AddSongToPersonalPlaylistReqBody = {
  song: AddSongToPersonalPlaylist;
};

export type AddSongToPersonalPlaylist = {
  name: string;
  publishDate: string;
  genre: SongType;
  personalPlaylist: {
    uuid: string;
  };
};
