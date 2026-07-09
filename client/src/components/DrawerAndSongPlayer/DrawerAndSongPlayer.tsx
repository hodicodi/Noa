import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC, useEffect, useRef, useState } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import { SongDrawer } from "../song-drawer/SongDrawer.tsx";
import SongPlaying from "../song-playing/SongPlaying.tsx";

export type DrawerInfoProps = {
  isDrawerOpen: boolean;
  ToggleDrawer: () => void;
  isPlay: boolean;
  handleIconClick: () => void;
};

const DrawerAndSongPlayer: FC = () => {
  const { recievedaudioUrl } = useGlobalDrawer();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlay, setisPlay] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (recievedaudioUrl) {
      audioRef.current = new Audio(recievedaudioUrl);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [recievedaudioUrl]);

  const playAudio = async () => {
    if (audioRef.current) {
      await audioRef.current.play();
    }
  };

  const pauseAudio = (): void => {
    if (audioRef.current) {
      audioRef.current.pause(); // Automatically pauses at the current time
    }
  };

  const ToggleDrawer = (): void => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleIconClick = (): void => {
    setisPlay((prev) => !prev);
    if (!isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  return (
    <>
      <SongPlaying isDrawerOpen={isDrawerOpen} isPlay={isPlay} ToggleDrawer={ToggleDrawer} handleIconClick={handleIconClick} />
      <SongDrawer
        imageUrl={playlistInfo[0]!.avaterPicture}
        isDrawerOpen={isDrawerOpen}
        isPlay={isPlay}
        ToggleDrawer={ToggleDrawer}
        handleIconClick={handleIconClick}
      />
    </>
  );
};

export default DrawerAndSongPlayer;
