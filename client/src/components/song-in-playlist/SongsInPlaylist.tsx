import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import SongInPlaylist from "./SongInPlaylist.tsx";
import { AlbumOverviewProps } from "../suggested-playlist/suggestedPlaylist.tsx";

const SongsInPlaylist: FC<AlbumOverviewProps> = ({ album }) => (
  <Box>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {album.songs!.map((song, index) => (
        <Grid size={100} key={index}>
          <SongInPlaylist song={song} album={album} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SongsInPlaylist;
