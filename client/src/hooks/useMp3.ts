import { GeneralParams } from "@shared/src/types/general.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const getMp3BufferByUuid = async (songData: GeneralParams): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`/songs/mp3/${songData.uuid}`, { params: { uuid: songData.uuid }, responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: "audio/mpeg" });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const useMp3 = (uuid: string) =>
  useQuery<string | null>({
    queryKey: ["mp3", uuid],
    queryFn: () => getMp3BufferByUuid({ uuid }),
    enabled: !!uuid,
  });
