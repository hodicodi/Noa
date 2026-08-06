import { Box } from "@mui/material";
import { FC } from "react";
import { useAlbumImg } from "../../../hooks/useAlbumImg.ts";
import { useGlobalDrawer } from "../DrawerContext.tsx";
import Styles from "./songPicture.style.ts";

const SongPicture: FC = () => {
  const { currentAlbum } = useGlobalDrawer();

  const { data: albumImg = null } = useAlbumImg(currentAlbum!.uuid!);

  return (
    <Box sx={Styles.imgContainer}>
      <Box sx={Styles.songImg} component="img" src={albumImg!} />
    </Box>
  );
};

export default SongPicture;
