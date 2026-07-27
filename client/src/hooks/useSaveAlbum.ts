import { ALBUMS_PATH } from "@shared/src/const/paths.const.ts";
import { Album, AlbumRes, SaveAlbum } from "@shared/src/types/album.types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { USE_ALBUMS_FILTER_KEY } from "./useAlbumsFilterQuery.ts";

export const saveAlbum = async (album: SaveAlbum): Promise<Album | null> => {
  const response = await API.post<AlbumRes>(ALBUMS_PATH, { album });
  return response.data?.album;
};

export const useSaveAlbum = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentAlbum: SaveAlbum) => saveAlbum(currentAlbum),
    onSuccess: async () => {
      onSuccess();
      await queryClient.invalidateQueries({ queryKey: [USE_ALBUMS_FILTER_KEY] });
    },
  });
};
