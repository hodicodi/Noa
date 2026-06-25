import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "../../../../shared/playlistProps.ts";
import style from "./songInPlaylist.style.ts"

const SongInPlaylist: React.FC<PlaylistOverviewProps> = ({
  name,
  avaterPicture,
  artist,
}: PlaylistOverviewProps) => {
  {
    return (
      <Box sx={style.box}>
        <Typography sx={style.playlistName} variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          sx={style.playlistName}
          variant="body2"
          component="div"
        >
          {artist}
        </Typography>
      </Box>
    );
  }
};

export default SongInPlaylist;
