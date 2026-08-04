import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { PLAYLIST_PATH } from "../../routes/path.constants.ts";
import Style from "./suggestedPlaylist.style.ts";
import { AlbumPreviewProps } from "../recent-playlist/lastPlaylist.types.ts";

const PlaylistCard: FC<AlbumPreviewProps> = ({ album }) => {
  const navigate = useNavigate();
  const albumImg = useAlbumImg(album.uuid!).data!;

  const suggestedPlaylistClick = () => {
    navigate(PLAYLIST_PATH, {
      state: { album },
    });
  };

  return (
    <Card sx={Style.card} onClick={suggestedPlaylistClick}>
      <CardContent sx={Style.cardContent}>
        <Typography sx={Style.playlistName} variant="h6">
          {album.name}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={albumImg} />
    </Card>
  );
};

export default PlaylistCard;
