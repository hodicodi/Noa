import { Artist } from "./artist.type";
import { Song } from "./song.types";

/*
export interface AlbumResponseDTO {
  album: {
    albumName: string;
    createdAt: string;
    songs: SongResponseDTO;
    artist: ArtistResponseDTO;
  }
}
*/

export type Album = {
  uuid: string;
  name: string;
  songs: Song[];
  artist: Artist;
};

export type AlbumRes = {
  album: Album | null;
};

export type AlbumParams = {
  uuid: string;
};

export type AlbumsRes = {
  albums: Album[] | null;
};

export type SaveAlbumReqBody = {
  name: string;
  songs: Song[];
  artist: Artist;
};
