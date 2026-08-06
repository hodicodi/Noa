import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, useMemo } from "react";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import Styles from "./PlaylistPicture.style.ts";
import { PlaylistProps } from "../../pages/home-page/playlist-page/playlistPage.types.ts";

const PlaylistPicture: FC<PlaylistProps> = ({ album }) => {
  const { data: albumImg = null } = useAlbumImg(album.uuid!);
  const { artistName, playlistName } = useMemo(() => {
  return {
    artistName: album.artist?.name ?? "",
    playlistName: album.name
  };
}, [album]);


  return (
    <Box sx={Styles.playlistMainPreview}>
      <Box sx={Styles.imgContainer}>
        <Box sx={Styles.playlistImg} component="img" src={albumImg!} />
      </Box>
      <Box>
        <Typography sx={Styles.playlistName} variant="h4">
          {playlistName}
        </Typography>
        <Typography sx={Styles.artistName} variant="body2">
          {artistName}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlaylistPicture;
