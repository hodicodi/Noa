import { SONGS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const useRecordByUuid = async (uuid: string): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`${SONGS_PATH}${UPLOADS_PATH}/${uuid}`, { params: { uuid }, responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: "audio/mpeg" });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const useRecord = (uuid: string) =>
  useQuery<string | null>({
    queryKey: ["mp3", uuid],
    queryFn: () => useRecordByUuid( uuid ),
    enabled: !!uuid,
  })
