import { artistType } from "../enums/artistType.enum";

export interface ArtistResponseDTO {
  artistName: string;
  artistType: artistType;
}