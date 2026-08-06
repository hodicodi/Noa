import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { PLAYLIST_PATH } from "../../routes/path.constants.ts";
import style from "./suggestedPlaylist.style.ts";
import { PlaylistProps } from "../../pages/home-page/playlist-page/playlistPage.types.ts";

const PlaylistCard: FC<PlaylistProps> = ({ album }) => {
  const navigate = useNavigate();
  const { data: albumImg = null } = useAlbumImg(album.uuid!);

  const suggestedPlaylistClick = () => {
    navigate(PLAYLIST_PATH, {
      state: { album },
    });
  };

  return (
    <Card sx={style.card} onClick={suggestedPlaylistClick}>
      <CardMedia component="img" image={albumImg!} />
      <Typography sx={style.playlistName} variant="body2">
        {album.name}
      </Typography>
    </Card>
  );
};

export default PlaylistCard;
