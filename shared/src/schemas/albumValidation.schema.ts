import { z } from "zod";
import { ArtistRegistrationSchema } from "./artistValidation.schema";

export const AlbumRegistrationSchema = z.object({
  name: z.string().min(3, "must be at least 3 characters"),
  artist: ArtistRegistrationSchema
});


export type AlbumRegistrationInput = z.infer<typeof AlbumRegistrationSchema>;
