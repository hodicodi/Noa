import axios from 'axios';
import dotenv from "dotenv";
import { artistType } from "@shared/src/enums/artistType.enum.ts";
import {AlbumResponseDTO} from "@shared/src/types/album.types.ts";
import {GetAlbumRequest} from "@shared/src/types/album.types.ts";


const API = axios.create({ baseURL: 'http://localhost:3000/' });

export const albumService = {
  getAlbumById: async (albumData: GetAlbumRequest): Promise<AlbumResponseDTO> => {
  const response = await API.get<AlbumResponseDTO>('/albums/album-by-id', { params: {albumUuid: "feeca3b9-89b9-4227-8a27-a26d69551362"}});
  return response.data;
  }
};
