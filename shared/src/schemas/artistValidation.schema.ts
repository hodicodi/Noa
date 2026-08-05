import { z } from "zod";
import { ArtistType } from "../enums/artistType.enum";

export const ArtistRegistrationSchema = z.object({
  uuid: z.string(),
  name: z.string().min(3, "must be at least 3 characters"),
  type: z.enum(ArtistType),
});


export type ArtistRegistrationInput = z.infer<typeof ArtistRegistrationSchema>;
