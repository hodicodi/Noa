import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import playlistInfo from "../../../../shared/hardCodedInfo.ts";
import SongInPlaylist from "./songInPlaylist.tsx";

const SongsInPlaylist: React.FC = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {playlistInfo.map((playlist) => (
          <Grid size={12} key={playlist.name}>
            <SongInPlaylist
              name={playlist.name}
              avaterPicture={playlist.avaterPicture}
              artist={playlist.artist}
            ></SongInPlaylist>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SongsInPlaylist;
