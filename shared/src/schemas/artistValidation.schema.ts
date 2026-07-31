import { z } from "zod";
import { ArtistType } from "../enums/artistType.enum";
import { AlbumRegistrationSchema } from "./albumValidation.schema";

export const ArtistRegistrationSchema = z.object({
  uuid: z.string().optional(),
  name: z.string().min(3, "must be at least 3 characters"),
  type: z.enum(ArtistType),
});


export type ArtistRegistrationInput = z.infer<typeof ArtistRegistrationSchema>;
