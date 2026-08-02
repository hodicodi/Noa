import { ArtistType } from "@shared/src/enums/artistType.enum.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { Artist } from "@shared/src/types/artist.type.ts";

const NEW_ARTIST_DEFAULT_VALUES: Artist = {
  name: "",
  type: ArtistType.Singer,
  albums: [],
};

export const NEW_ALBUM_DEFAULT_VALUES: Album = {
  name: "",
  songs: [],
  imgUrl: "",
  artist: NEW_ARTIST_DEFAULT_VALUES,
};

export default NEW_ALBUM_DEFAULT_VALUES;
