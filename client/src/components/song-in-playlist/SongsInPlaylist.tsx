import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { AlbumOverviewProps } from "../recent-playlist/lastPlaylist.tsx";
import SongInPlaylist from "./SongInPlaylist.tsx";

const SongsInPlaylist: FC<AlbumOverviewProps> = ({album}) => {

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {album.songs!.map((song, index) => (
          <Grid size={12} key={index}>
            <SongInPlaylist song={song} artistName={album.artist.name}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SongsInPlaylist;
