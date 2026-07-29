import {
    ALBUMS_PATH
} from "@shared/src/const/paths.const.ts";
import { Album, AlbumsRes } from "@shared/src/types/album.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { USE_ALBUMS_FILTER_KEY } from "./useAlbumsFilterQuery.ts";


const getAllAlbums = async (): Promise<Album[] | null> => {
  const response = await API.get<AlbumsRes>(ALBUMS_PATH);
  return response.data?.albums ?? [];
};

export const useAllAlbums = () => {
  return useQuery<Album[] | null, Error>({
    queryKey: [USE_ALBUMS_FILTER_KEY],
    queryFn: getAllAlbums,
  });
};