import { ArtistType } from "@shared/src/enums/artistType.enum.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { Artist } from "@shared/src/types/artist.type.ts";

const newArtist: Artist = {
  uuid: "",
  name: "",
  type: ArtistType.Singer,
  albums: [],
};

const newAlbum: Album = {
  uuid: "",
  name: "",
  songs: [],
  artist: newArtist,
};

export default newAlbum;
