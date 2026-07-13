import { songsInfo } from "@shared/hardCodedInfo.ts";
import { Song, SongOverviewProps } from "@shared/src/types/song.types.ts";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { useMp3 } from "../../hooks/useMp3.ts";

type DrawerContextType = {
  currentSong: SongOverviewProps;
  setCurrentSong: (currentSong: SongOverviewProps) => void;
  recievedAudioUrl: string | null;
  audioUrl: string | null;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<SongOverviewProps>({
    uuid: songsInfo[0]?.uuid!,
    name: songsInfo[0]?.name!,
    artistName: songsInfo[0]?.artistName!,
  });

  const { data: recievedAudioUrl = null } = useMp3(currentSong.uuid!);

  const [audioUrl, setAudioUrl] = useState<string | null>(recievedAudioUrl!);

  useEffect(() => {
    if (recievedAudioUrl) {
      setAudioUrl(recievedAudioUrl!);
    }
  }, [recievedAudioUrl]);

  return <DrawerContext.Provider value={{ recievedAudioUrl, currentSong, setCurrentSong, audioUrl }}>{children}</DrawerContext.Provider>;
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useGlobalDrawer must be used within a DrawerProvider");
  }
  return context;
};
