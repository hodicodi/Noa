// hooks/useTodos.ts
import { useQuery } from "@tanstack/react-query";
import { albumService } from "../api/services/albumService.ts";
import { AlbumRes, SaveAlbum, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import axios from "axios";

// Fetching a single record dynamically
export const useAlbum = (uuid: string) => {
  return useQuery<AlbumRes, Error>({
    queryKey: ["albums", uuid],
    queryFn: () => albumService.getAlbumById({ uuid }),
    enabled: !!uuid, // Prevent automatic execution if id is missing
  });
};


/*
const mapAlbum = (): SaveAlbumReqBody => ({
  album: {
    name: "Torah lesson",
    artist: {
      uuid: "d697ce21-b1f6-449e-b55e-1f70277f3add",
    },
    songs: [
      {
        name: "Hevel Havalim",
        genre: "rock",
      },
      {
        name: "Rabi Nahman",
        genre: "rock",
      },
    ],
  }
}) 

axios.post("/", {
,
});

*/
