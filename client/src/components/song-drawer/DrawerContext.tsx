import { songsInfo } from "@shared/hardCodedInfo.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { SongOverviewProps } from "@shared/src/types/song.types.ts";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { usemp3, useSong } from "../../hooks/useSong.ts";

type DrawerContextType = {
  currentSong: SongOverviewProps;
  setCurrentSong: (currentSong: SongOverviewProps) => void;
  recievedaudioUrl: string | undefined | null;
  audioUrl: string | null;
};

type CurrentPlayedSong = {
  song: Partial<Song>;
  artistName: string;
  audioUrl: string | null | undefined;
  currentTime: number;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<SongOverviewProps>({
    uuid: songsInfo[0]?.uuid!,
    name: songsInfo[0]?.name!,
    artistName: songsInfo[0]?.artistName!,
  });

  const { data: recievedaudioUrl } = usemp3(currentSong.uuid!);

  const [audioUrl, setAudioUrl] = useState<string | null>(recievedaudioUrl!);

  useEffect(() => {
    if (recievedaudioUrl) {
      setAudioUrl(recievedaudioUrl!);
    }
  }, [recievedaudioUrl]);

  return <DrawerContext.Provider value={{ recievedaudioUrl, currentSong, setCurrentSong, audioUrl }}>{children}</DrawerContext.Provider>;
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useGlobalDrawer must be used within a DrawerProvider");
  }
  return context;
};
