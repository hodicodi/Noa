import { artistType } from "../enums/artistType.enum";
import { Album } from "./album.types";

export type Artist = {
  uuid: string
  name: string;
  type: artistType;
  albums: Album[];
}

export type ArtistRes = {
  artist: Artist | null
}

export type ArtistParams = {
  uuid: string;
}

export type ArtistsRes = {
  artists: Artist[] | null
}

export type SaveArtistReqBody = {
  artist: SaveArtist;
}

export type SaveArtist = {
  name: string;
  type: artistType;
}