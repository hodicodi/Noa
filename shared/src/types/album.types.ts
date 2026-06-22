import { ArtistResponseDTO } from "./artist.type";
import { SongResponseDTO } from "./song.types";

export interface CreateAlbumRequest {
  albumName: string;
}

export interface GetAlbumRequest {
  albumUuid: string;
}

export interface AlbumResponseDTO {
  album: {
    albumName: string;
    createdAt: string;
    songs: SongResponseDTO;
    artist: ArtistResponseDTO;
  }
}