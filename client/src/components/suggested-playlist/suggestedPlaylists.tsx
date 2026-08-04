import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useAllAlbums } from "../../hooks/useAllAlbums.ts";
import style from "./suggestedPlaylist.style.ts";
import PlaylistCard from "./suggestedPlaylist.tsx";

const SuggestedPlaylists: React.FC = () => {
  const { data: albums, isLoading } = useAllAlbums()

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      <Typography sx={style} color="primary" gutterBottom variant="h6" component="div">
        Suggested playlists
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {albums?.map((album) => (
          <Grid size={6} key={album?.name!}>
              <PlaylistCard album= {album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuggestedPlaylists;
