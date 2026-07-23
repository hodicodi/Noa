import { ARTISTS_PATH } from "@shared/src/const/paths.const.ts";
import { Artist, ArtistRes, SaveArtist } from "@shared/src/types/artist.type.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { USE_ARTISTS_FILTER_KEY } from "./useArtistsFilterQuery.ts";

export const saveArtist = async (artistData: SaveArtist): Promise<Artist | null> => {
  const response = await API.post<ArtistRes>(ARTISTS_PATH, { artist: artistData });
  return response.data?.artist;
};

export const useSaveArtist = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentArtist: SaveArtist) => saveArtist(currentArtist),
    onSuccess: async () => {
      onSuccess();
      await queryClient.invalidateQueries({ queryKey: [USE_ARTISTS_FILTER_KEY] });
    },
  });
};
