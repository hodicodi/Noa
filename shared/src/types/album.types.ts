import { Artist } from "./artist.type";
import { Song } from "./song.types";

export type Album = {
  uuid?: string;
  name: string;
  imgUrl: string | null;
  songs?: Song[];
  artist: Artist;
};

export type AlbumRes = {
  album: Album | null;
};

export type AlbumsRes = {
  albums: Album[] | null;
};

export type SaveAlbumReqBody = {
  album: SaveAlbum;
};

export type SaveAlbum = {
  name: string;
  artist: Artist;
};


