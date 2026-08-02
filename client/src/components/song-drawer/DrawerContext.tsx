import { Song } from "@shared/src/types/song.types.ts";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { useRecord } from "../../hooks/useRecord.ts";
import { defaultAlbum, defaultSong } from "@shared/hardCodedInfo.ts";
import { Album } from "@shared/src/types/album.types.ts";

type DrawerContextType = {
  currentSong: Song | undefined;
  setCurrentSong: (currentSong: Song) => void;
  currentAlbum: Album | undefined;
  setCurrentAlbum: (currentAlbum: Album) => void;
  recievedAudioUrl: string | null;
  audioUrl: string | null;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song>();
  const [currentAlbum, setCurrentAlbum] = useState<Album>();

  const { data: recievedAudioUrl = null } = useRecord(currentSong?.uuid ?? "");

  const [audioUrl, setAudioUrl] = useState<string | null>(recievedAudioUrl!);

  useEffect(() => {
    if (recievedAudioUrl) {
      setAudioUrl(recievedAudioUrl!);
    }
  }, [recievedAudioUrl]);

  return (
    <DrawerContext.Provider value={{ recievedAudioUrl, currentSong, setCurrentSong, audioUrl, currentAlbum, setCurrentAlbum }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useGlobalDrawer must be used within a DrawerProvider");
  }
  return context;
};
