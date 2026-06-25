import { Album, AlbumRes } from "@shared/src/types/album.types.ts";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/services/albumService.ts";
import { GeneralParams } from "@shared/src/types/general.types.ts";


export const albumService = {
  getAlbumById: async (albumData: GeneralParams): Promise<Album | null> => {
    const response = await API.get<AlbumRes>(`/albums/${albumData.uuid}`, { params: { uuid: albumData.uuid } });
    return response.data?.album;
  },
};

export const useAlbum = (uuid: string) => {
  return useQuery<Album | null, Error>({
    queryKey: ["albums", uuid],
    queryFn: () => albumService.getAlbumById({ uuid }),
    enabled: !!uuid,
  });
};
