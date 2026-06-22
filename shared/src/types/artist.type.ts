import { artistType } from "../enums/artistType.enum";

export type Artist = {
  artistUuid: string
  artistName: string;
  artistType: artistType;
}

export type ArtistRes = {
  artist: Artist | null
}