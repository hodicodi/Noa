import { z } from "zod";
import { ArtistRegistrationSchema } from "./artistValidation.schema";

export const AlbumRegistrationSchema = z.object({
  imgFile: z.file(),
  uuid: z.string().optional(),
  name: z.string().min(3, "must be at least 3 characters"),
  artist: ArtistRegistrationSchema,
  imgUrl: z.string().optional().nullable(),
});

export type AlbumRegistrationInput = z.infer<typeof AlbumRegistrationSchema>;
