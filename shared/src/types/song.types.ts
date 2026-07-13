import { Album } from "./album.types.ts";
import { SongType } from "../enums/songType.enum";

export type Song = {
  uuid: string;
  name: string;
  publishDate: string;
  genre: SongType;
  s3Url?: string;
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
  s3Url: string;
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
  s3Url: string;
  personalPlaylist: {
    uuid: string;
  };
};

export type SongOverviewProps = {
  uuid: string;
  name: string;
  artistName: string;
  avaterPicture?: string
};

export type SaveSong = {
  name: string;
  publishDate: string;
  genre: SongType;
  s3Url?: string;
};

export type SaveSongReqBody = {
  song: SaveSong;
}
