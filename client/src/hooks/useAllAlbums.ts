import { ALBUMS_PATH, ARTISTS_PATH } from "@shared/src/const/paths.const.ts";
import { Artist, ArtistsRes } from "@shared/src/types/artist.type.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { Album, AlbumsRes } from "@shared/src/types/album.types.ts";

const USE_ALBUMS_FILTER_KEY = "useAlbumsFilterKey"

const getAllAlbums = async (): Promise<Album[]> => {
  const response = await API.get<AlbumsRes>(ALBUMS_PATH);
  return response.data?.albums ?? [];
};

export const useAllAlbums = () => {
  return useQuery<Album[], Error>({
    queryKey: [USE_ALBUMS_FILTER_KEY],
    queryFn: () => getAllAlbums(),
  });
};
