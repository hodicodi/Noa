import { ARTISTS_PATH } from "@shared/src/const/paths.const.ts";
import { Artist, ArtistsRes } from "@shared/src/types/artist.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const USE_ARTISTS_FILTER_KEY = "useArtistsFilterKey"

const getAllArtists = async (): Promise<Artist[]> => {
  const response = await API.get<ArtistsRes>(ARTISTS_PATH);
  return response.data?.artists ?? [];
};

export const useAllArtists = () => {
  return useQuery<Artist[], Error>({
    queryKey: [USE_ARTISTS_FILTER_KEY],
    queryFn: () => getAllArtists(),
  });
};
