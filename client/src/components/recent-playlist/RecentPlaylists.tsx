import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Album } from "@shared/src/types/album.types.ts";
import { FC } from "react";
import { useAlbum } from "../../hooks/useAlbum.ts";
import LastPlaylistCard from "./lastPlaylist.tsx";
import { useAllAlbums } from "../../hooks/useAllAlbums.ts";

const LastPlaylists: FC = () => {
  const { data: albums, isLoading } = useAllAlbums();

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h6" component="div">
        Recent listenings
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {albums?.map((album) => (
          <Grid size={6} key={album.name}>
            <LastPlaylistCard album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastPlaylists;
