import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "../../../../shared/playlistProps.ts";
import style from "./PlaylistPicture.Style.ts";

const PlaylistPicture: React.FC<PlaylistOverviewProps> = ({
  name,
  avaterPicture,
}: PlaylistOverviewProps) => {
  return (
    <Card sx={style.card}>
      <CardContent sx={style.cardContent}>
        <Typography
          sx={style.playlistName}
          gutterBottom
          variant="h6"
        >
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={style.cardMedia}
        component="img"
        image={avaterPicture}
      />
    </Card>
  );
};

export default PlaylistPicture;
