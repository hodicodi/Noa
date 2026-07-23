import { ArtistType } from "@shared/src/enums/artistType.enum.ts";
import { Artist } from "@shared/src/types/artist.type.ts";
import { User } from "@shared/src/types/user.type.ts";

export type handleArtistRowProps = {
  artist: Artist;
  edit: boolean;
};

export const formDefaultValues = {
    name: "", artistType: ArtistType.Singer
  }