import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { ALBUMS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { GeneralParams } from "@shared/src/types/general.types.ts";

const USE_ALBUM_IMG_FILTER_KEY = "albumImg";

const getAlbumImgByUuid = async (albumImgData: GeneralParams): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`${ALBUMS_PATH}${UPLOADS_PATH}/${albumImgData.uuid}`, { responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: "image/png" });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const useAlbumImg = (uuid: string) =>
  useQuery<string | null>({
    queryKey: [USE_ALBUM_IMG_FILTER_KEY, uuid],
    queryFn: () => getAlbumImgByUuid({ uuid }),
    enabled: !!uuid,
  });
