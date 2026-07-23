import {
    ARTISTS_PATH
} from "@shared/src/const/paths.const.ts";
import { Artist, ArtistsRes } from "@shared/src/types/artist.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_ARTISTS_FILTER_KEY = "artist";

const getArtistsFilterQuery = async (searchQuery: string): Promise<Artist[] | null> => {
  const response = await API.get<ArtistsRes>(ARTISTS_PATH + `/search?searchQuery=${searchQuery}`); 
  return response.data?.artists ?? [];
};

export const useArtistsFilterQuery = (searchQuery: string) => {
  return useQuery<Artist[] | null, Error>({
    queryKey: [USE_ARTISTS_FILTER_KEY, searchQuery],
    queryFn: () => getArtistsFilterQuery(searchQuery),
  });
};
