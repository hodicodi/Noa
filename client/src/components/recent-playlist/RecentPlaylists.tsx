import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import playlistInfo from "../../../../shared/hardCodedInfo.ts";
import LastPlaylistCard from "./lastPlaylist.tsx";
import { useAlbum } from "../../hooks/useAlbum.ts";
import { Album, AlbumRes } from "@shared/src/types/album.types.ts";
import { FC } from "react";

const LastPlaylists: FC = () => {
  // Should be fetching from db off all latest albums
  const { data: album, isLoading } = useAlbum("8e64586a-26c6-4e6f-a0fa-6d741f3b069d");

  const latestAlbums: Album[] = Array(8).fill(album) ?? [];
  const avatarImage =
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999";

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
