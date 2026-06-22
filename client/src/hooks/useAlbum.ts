// hooks/useTodos.ts
import { useQuery } from '@tanstack/react-query';
import { albumService } from '../api/services/albumService.ts';
import {AlbumRes} from "@shared/src/types/album.types.ts";


// Fetching a single record dynamically
export const useAlbum = (albumUuid: string) => {
  return useQuery<AlbumRes, Error>({
    queryKey: ['albums', albumUuid],
    queryFn: () => albumService.getAlbumById({albumUuid}),
    enabled: !!albumUuid, // Prevent automatic execution if id is missing
  });
};























































/* import { useState, useEffect } from 'react';
import {AlbumResponseDTO} from "@shared/src/types/album.types.ts";
import { albumService } from '../api/services/albumService.ts';

export const useAlbum = (albumName?: string) => {
  const [album, setAlbum] = useState<AlbumResponseDTO | AlbumResponseDTO[] | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = albumName? await albumService.getAlbumByName(albumName);
        setAlbum(result);
      } catch (err: any) {

      }
    };

    fetchData();
  }, [albumName]);

  return { album };
};
*/