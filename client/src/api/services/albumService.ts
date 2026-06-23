import { AlbumParams, AlbumRes, } from "@shared/src/types/album.types.ts";
import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:3000/' });

export const albumService = {
  getAlbumById: async (albumData: AlbumParams): Promise<AlbumRes> => {
  const response = await API.get<AlbumRes>(`/albums/${albumData.uuid}`, { params: {uuid: albumData.uuid}});
  return response.data;
  }
};
