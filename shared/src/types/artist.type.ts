import { ArtistType } from "../enums/artistType.enum";
import { Album } from "./album.types";

export type Artist = {
  uuid: string;
  name: string;
  type: ArtistType;
  albums: Album[];
};

export type ArtistRes = {
  artist: Artist | null;
};

export type ArtistsRes = {
  artists: Artist[] | null;
};

export type SaveArtistReqBody = {
  artist: SaveArtist;
};

export type SaveArtist = {
  name: string;
  type: ArtistType;
};
