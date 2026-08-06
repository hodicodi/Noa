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
  const { recievedAudioUrl, isPlay, setPlay } = useGlobalDrawer();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    pauseAudio();
    if (recievedAudioUrl) {
      audioRef.current = new Audio(recievedAudioUrl);
    }
    if (isPlay) {
      playAudio();
    }
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
    setPlay(!isPlay);
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
