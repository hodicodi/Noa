import { ALBUMS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

export const USE_ALBUMS_UPLOADS_FILTER_KEY = "albumUploads";

export const saveAlbumImg = async (formData: FormData): Promise<File> => {
  console.log("upload data:" + formData);
  const response = await API.post<File>(`${ALBUMS_PATH}${UPLOADS_PATH}`, formData);
  return response.data;
};

export const useSaveAlbumImg = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (uploadImgData: FormData) => saveAlbumImg(uploadImgData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USE_ALBUMS_UPLOADS_FILTER_KEY] });
    },
  });
};
