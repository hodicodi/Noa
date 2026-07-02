import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { GeneralParams } from "@shared/src/types/general.types.ts";
import { Song } from "@shared/src/types/song.types.ts";

/*

  const getSongById  = async (albumData: GeneralParams): Promise<Song | null> => {
    const response = await API.get<AlbumRes>(`/albums/${albumData.uuid}`, { params: { uuid: albumData.uuid } });
    return response.data?.album;
  };


export const useAlbum = (uuid: string) => {
  return useQuery<Album | null, Error>({
    queryKey: ["albums", uuid],
    queryFn: () => getAlbumById({ uuid }),
    enabled: !!uuid,
  });
};

*/
