import { z } from "zod";
import { ArtistType } from "../enums/artistType.enum";



export const ArtistRegistrationSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  type: z.enum(ArtistType),
  isAdministor: z.boolean(),
});

export type UserRegistrationInput = z.infer<typeof UserRegistrationSchema>;
