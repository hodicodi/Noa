import { z } from "zod";
import { SongType } from "../enums/songType.enum";
import { AlbumRegistrationSchema } from "./albumValidation.schema";

export const SongRegistrationSchema = z.object({
  uuid: z.string().optional(),
  name: z.string().min(3, "must be at least 3 characters"),
  publishDate: z.date(),
  genre: z.enum(SongType),
  album: AlbumRegistrationSchema,
});

export type SongRegistrationInput = z.infer<typeof SongRegistrationSchema>;
