import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import playlistInfo from "../../../../shared/hardCodedInfo.ts";
import LastPlaylistCard from "./lastPlaylist";

const LastPlaylists: React.FC = () => {
  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h6" component="div">
        Recent listenings
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {playlistInfo.map((playlist) => (
          <Grid size={6} key={playlist.name}>
            <LastPlaylistCard
              name={playlist.name}
              avaterPicture={playlist.avaterPicture}
            ></LastPlaylistCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastPlaylists;
