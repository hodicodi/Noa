import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useAllAlbums } from "../../hooks/useAllAlbums.ts";
import LastPlaylistCard from "./lastPlaylist.tsx";

const LastPlaylists: FC = () => {
  const { data: albums = [], isLoading } = useAllAlbums();

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h6" component="div">
        Recent listenings
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {albums?.slice(0, 6).map((album) => (
          <Grid size={6} key={album.name}>
            <LastPlaylistCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastPlaylists;
