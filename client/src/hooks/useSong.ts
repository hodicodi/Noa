import { GeneralParams } from "@shared/src/types/general.types.ts";
import { Song, SongRes } from "@shared/src/types/song.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";

const getSongById = async (songData: GeneralParams): Promise<Song | null> => {
  const response = await API.get<SongRes>(`/songs/${songData.uuid}`, { params: { uuid: songData.uuid } });
  return response?.data?.song;
};

export const useSong = (uuid: string) =>
  useQuery<Song | null, Error>({
    queryKey: ["songs", uuid],
    queryFn: () => getSongById({ uuid }),
    enabled: !!uuid,
  });
