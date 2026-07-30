import { ALBUMS_PATH } from "@shared/src/const/paths.const.ts";
import { Song, SongsRes } from "@shared/src/types/song.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_SONGS_FILTER_KEY = "useSongsFilterKey";

const getSongFilterQuery = async (searchQuery: string): Promise<Song[] | null> => {
  const response = await API.get<SongsRes>(ALBUMS_PATH + "/search", {
    params: { searchQuery },
  });
  return response.data?.songs ?? [];
};

export const useSongFilterQuery = (searchQuery: string) => {
  return useQuery<Song[] | null, Error>({
    queryKey: [USE_SONGS_FILTER_KEY, searchQuery],
    queryFn: () => getSongFilterQuery(searchQuery),
  });
};
