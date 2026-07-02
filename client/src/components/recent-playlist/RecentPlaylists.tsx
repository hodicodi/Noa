import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Album } from "@shared/src/types/album.types.ts";
import { FC } from "react";
import { useAlbum } from "../../hooks/useAlbum.ts";
import LastPlaylistCard from "./lastPlaylist.tsx";

const LastPlaylists: FC = () => {
  // Should be fetching from db off all latest albums
  const { data: album, isLoading } = useAlbum("9c609112-b8bc-4772-9f6b-9d828288bb66");

  const latestAlbums: Album[] = Array(8).fill(album) ?? [];
  const avatarImage =
    "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F890d5a9fbbe79b45c3cee4d7b086accd.1000x563x1.jpg";

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      <Typography color="primary" gutterBottom variant="h6" component="div">
        Recent listenings
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {latestAlbums?.map((album) => (
          <Grid size={6} key={album.name}>
            <LastPlaylistCard
              name={album.name!}
              avaterPicture={avatarImage}
              artist={album.artist.name!}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastPlaylists;
