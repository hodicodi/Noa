import { GeneralParams } from "@shared/src/types/general.types.ts";
import { Song, SongRes } from "@shared/src/types/song.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { blob } from "node:stream/consumers";

const getSongById = async (songData: GeneralParams): Promise<Song | null> => {
  const response = await API.get<SongRes>(`/songs/${songData.uuid}`, { params: { uuid: songData.uuid } });
  return response.data?.song;
};

export const useSong = (uuid: string) => {
  return useQuery<Song | null, Error>({
    queryKey: ["songs", uuid],
    queryFn: () => getSongById({ uuid }),
    enabled: !!uuid,
  });
};

const getMp3BufferByUuid = async (songData: GeneralParams): Promise<string | null> => {
  const response = await API.get<ArrayBuffer>(`/songs/mp3/${songData.uuid}`, { params: { uuid: songData.uuid }, responseType: "arraybuffer" });
  const blob = new Blob([response.data], { type: "audio/mpeg" });
  const audioUrl = URL.createObjectURL(blob);
  return audioUrl;
};

export const usemp3 = (uuid: string) => {
  return useQuery<string | null>({
    queryKey: ["mp3", uuid],
    queryFn: () => getMp3BufferByUuid({ uuid }),
    enabled: !!uuid,
  });
};
