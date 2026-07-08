import { songsInfo } from "@shared/hardCodedInfo.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { SongOverviewProps } from "@shared/src/types/song.types.ts";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { usemp3 } from "../../hooks/useSong.ts";

type DrawerContextType = {
  isOpen: boolean;
  ToggleDrawer: () => void;
  isplayIconMarked: boolean;
  handleIconClick: () => void;
  currentSong: SongOverviewProps;
  setCurrentSong: (currentSong: SongOverviewProps) => void;
  RecievedaudioUrl: string | undefined | null;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isplayIconMarked, setIsplayIconMarked] = useState<boolean>(true);

  const [currentSong, setCurrentSong] = useState<SongOverviewProps>({
    uuid: songsInfo[0]?.uuid!,
    name: songsInfo[0]?.name!,
    artistName: songsInfo[0]?.artistName!,
  });

  const { data: RecievedaudioUrl } = usemp3("ab38b12b-5025-4ca7-bd6f-ed8f795b3527");

  const [audioUrl, setAudioUrl] = useState<string | null>(RecievedaudioUrl!);

  useEffect(() => {
    if (RecievedaudioUrl) {
      setAudioUrl(RecievedaudioUrl);
    }
  }, [RecievedaudioUrl]);

  const handleIconClick = (): void => {
    setIsplayIconMarked((prev) => !prev);
    if (isplayIconMarked) {
      const audio = new Audio(audioUrl!);
      audio.play();
    }
  };

  const ToggleDrawer = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DrawerContext.Provider value={{ RecievedaudioUrl, isOpen, isplayIconMarked, ToggleDrawer, handleIconClick, currentSong, setCurrentSong }}>{children}</DrawerContext.Provider>
  );
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useGlobalDrawer must be used within a DrawerProvider");
  }
  return context;
};
