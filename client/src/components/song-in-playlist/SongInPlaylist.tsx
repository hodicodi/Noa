import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PlaylistOverviewProps } from "../../../../shared/playlistProps.ts";
import style from "./SongInPlaylist.style.ts";

const SongInPlaylist: React.FC<PlaylistOverviewProps> = ({
  name,
  avaterPicture,
  artist
}: PlaylistOverviewProps) => {
  {
    return (
        <Box sx={style.box}>
                <Typography
                  sx={style.playlistName}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {name}
                </Typography>
                <Typography
                  sx={style.playlistName}
                  gutterBottom
                  variant="body2"
                  component="div"
                  justify-contenr="flex-start"
                >
                  {artist}
                </Typography>
        </Box>
    );
  }
};

export default SongInPlaylist;
