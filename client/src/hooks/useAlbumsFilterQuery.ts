import {
    ALBUMS_PATH
} from "@shared/src/const/paths.const.ts";
import { Album, AlbumsRes } from "@shared/src/types/album.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_ALBUMS_FILTER_KEY = "useAlbumFilterKey";

const getAlbumFilterQuery = async (searchQuery: string): Promise<Album[] | null> => {
  const response = await API.get<AlbumsRes>(ALBUMS_PATH + '/search', {
    params: { searchQuery },
  });
  return response.data?.albums ?? [];
};

export const useAlbumFilterQuery = (searchQuery: string) => {
  return useQuery<Album[] | null, Error>({
    queryKey: [USE_ALBUMS_FILTER_KEY, searchQuery],
    queryFn: () => getAlbumFilterQuery(searchQuery),
  });
};

