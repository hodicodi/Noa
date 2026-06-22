import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import playlistInfo from "../../../../shared/hardCodedInfo.ts";
import LastPlaylistCard from "./lastPlaylist.tsx";
import { useAlbum } from "../../hooks/useAlbum.ts";
import { AlbumResponseDTO } from "@shared/src/types/album.types.ts";
import { FC } from "react";

const LastPlaylists: FC = () => {
  // Should be fetching from db off all latest albums
  const { data: album, isLoading } = useAlbum("feeca3b9-89b9-4227-8a27-a26d69551362");

  const latestAlbums: AlbumResponseDTO[] = Array(8).fill(album) ?? [];
  const avatarImage =
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999";
    console.log(latestAlbums)

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
          <Grid size={6} key={album.album.albumName}>
            <LastPlaylistCard
              name={album.album.albumName}
              avaterPicture={avatarImage}
              artist={album.album.artist?.artistName}
            ></LastPlaylistCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastPlaylists;
