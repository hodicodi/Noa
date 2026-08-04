import { ALBUMS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { IMG_FILE } from "@shared/src/const/binaryData.consts.ts";

const USE_ALBUM_IMG_FILTER_KEY = "useAlbumImgFilterKey";

const getAlbumImgByUuid = async (uuid: string): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`${ALBUMS_PATH}${UPLOADS_PATH}/${uuid}`, { responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: IMG_FILE });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const useAlbumImg = (uuid: string) =>
  useQuery<string | null>({
    queryKey: [USE_ALBUM_IMG_FILTER_KEY, uuid],
    queryFn: () => getAlbumImgByUuid(uuid),
    enabled: !!uuid,
  });
