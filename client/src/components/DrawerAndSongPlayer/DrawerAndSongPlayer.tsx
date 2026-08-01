import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC, useEffect, useRef, useState } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import { SongDrawer } from "../song-drawer/SongDrawer.tsx";
import SongPlaying from "../song-playing/SongPlaying.tsx";

export type DrawerInfoProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isPlay: boolean;
  handleIconClick: () => void;
};

const DrawerAndSongPlayer: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const { recievedAudioUrl } = useGlobalDrawer();
  const timesRender = useRef(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    pauseAudio();
    if (recievedAudioUrl) {
      audioRef.current = new Audio(recievedAudioUrl);
    }
    if (timesRender.current > 2) {
      setIsPlay(true);
      playAudio();
    }
    timesRender.current++;
  }, [recievedAudioUrl]);

  const playAudio = async () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggleDrawer = (): void => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleIconClick = (): void => {
    setIsPlay((prev) => !prev);
    if (!isPlay) {
      playAudio();
      return;
    }
    pauseAudio();
  };

  return (
    <>
      <SongPlaying isDrawerOpen={isDrawerOpen} isPlay={isPlay} toggleDrawer={toggleDrawer} handleIconClick={handleIconClick} />
      <SongDrawer isDrawerOpen={isDrawerOpen} isPlay={isPlay} toggleDrawer={toggleDrawer} handleIconClick={handleIconClick} />
    </>
  );
};

export default DrawerAndSongPlayer;
