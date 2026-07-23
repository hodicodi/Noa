import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/src/types/personalPlaylist.types.ts";
import style from "./suggestedPlaylist.style.ts";
import { useNavigate } from "react-router-dom";
import {PLAYLIST_PATH} from "../../routes/path.constants.ts";
import { FC } from "react";

const PlaylistCard: FC<PlaylistOverviewProps> = ({
  name,
  avaterPicture,
}: PlaylistOverviewProps) => {
  const navigate = useNavigate();

  const suggestedPlaylistClick = () => {
    navigate(PLAYLIST_PATH);
  };

  return (
    <Card sx={style.card} onClick={suggestedPlaylistClick}>
      <CardContent sx={style.cardContent}>
        <Typography sx={style.playlistName}  variant="h6">
          {name}
        </Typography> 
      </CardContent>
      <CardMedia component="img" image={avaterPicture} />
    </Card>
  );
};

export default PlaylistCard;
