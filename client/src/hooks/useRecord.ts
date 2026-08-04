import { SONGS_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { RECORD_FILE } from "@shared/src/const/binaryData.consts.ts";

export const USE_RECORD_KEY = "useRecordKey";

const useRecordByUuid = async (uuid: string): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`${SONGS_PATH}${UPLOADS_PATH}/${uuid}`, { responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: RECORD_FILE });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const useRecord = (uuid: string) =>
  useQuery<string | null>({
    queryKey: [USE_RECORD_KEY, uuid],
    queryFn: () => useRecordByUuid(uuid),
    enabled: !!uuid,
  });
