import { ArtistType } from "@shared/src/enums/artistType.enum.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { Artist } from "@shared/src/types/artist.type.ts";

export const newArtist: Artist = {
  name: "",
  type: ArtistType.Singer,
  albums: [],
};

export const newAlbum: Album = {
  name: "",
  songs: [],
  imgUrl: "",
  artist: newArtist,
};