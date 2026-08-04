import { ALBUMS_PATH, SONGS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_SONGS_UPLOADS_FILTER_KEY = "songUploads";

export const saveSongRecord = async (formData: FormData): Promise<File> => {
  const response = await API.post<File>(`${SONGS_PATH}${UPLOADS_PATH}`, formData);
  return response.data;
};

export const useSaveSongRecord = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (uploadRecordData: FormData) => saveSongRecord(uploadRecordData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USE_SONGS_UPLOADS_FILTER_KEY] });
    },
  });
};
