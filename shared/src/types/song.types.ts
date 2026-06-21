import { songType } from "../enums/songType.enum";

export interface SongResponseDTO {
  songName: string;
  publishDate: string;
  genere: songType;
}