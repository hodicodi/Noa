import { SongType } from "../enums/songType.enum";
import { PersonalPlaylist } from "../../../server/src/personal-playlist/personalPlaylist.entity.ts";
import { Album } from "../../../server/src/album/album.entity.ts";

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
