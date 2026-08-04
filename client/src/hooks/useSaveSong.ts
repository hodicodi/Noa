import { SONGS_PATH } from "@shared/src/const/paths.const.ts";
import { SaveSong, Song, SongRes } from "@shared/src/types/song.types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { USE_SONGS_FILTER_KEY } from "./useSongFilterQuery.ts";

export const saveSong = async (song: SaveSong): Promise<Song | null> => {
  const response = await API.post<SongRes>(SONGS_PATH, { song });
  return response.data?.song;
};

export const useSaveSong = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (currentSong: SaveSong) => saveSong(currentSong),
    onSuccess: async () => {
      onSuccess();
      await queryClient.invalidateQueries({ queryKey: [USE_SONGS_FILTER_KEY] });
    },
  });
};
