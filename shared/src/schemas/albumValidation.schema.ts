import { z } from "zod";
import { Song } from "../types/song.types";

export const AlbumRegistrationSchema = z.object({
  name: z.string().min(3, "must be at least 3 characters"),
  songs: z,
  artist: z
});



export type AlbumRegistrationInput = z.infer<typeof AlbumRegistrationSchema>;
