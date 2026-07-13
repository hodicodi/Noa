import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { playlistInfo, songsInfo } from "@shared/hardCodedInfo.ts";
import SongInPlaylist from "./SongInPlaylist.tsx";

const SongsInPlaylist: React.FC = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {songsInfo.map((song, index) => (
          <Grid size={12} key={index}>
            <SongInPlaylist uuid={song.uuid} name={song.name} artistName={song.artistName} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SongsInPlaylist;
