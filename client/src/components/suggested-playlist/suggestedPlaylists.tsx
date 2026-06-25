import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PlaylistCard from "./suggestedPlaylist.tsx";
import playlistInfo from "@shared/hardCodedInfo.ts";
import style from "./suggestedPlaylist.style.ts";
import { Album, AlbumRes } from "@shared/src/types/album.types.ts";
import { useAlbum } from "../../hooks/useAlbum.ts";


const SuggestedPlaylists: React.FC = () => {
  const { data: album, isLoading } = useAlbum("8e64586a-26c6-4e6f-a0fa-6d741f3b069d");
  const latestAlbums: Album[] = Array(8).fill(album) ?? [];
  const avatarImage = "https://images.unsplash.com/photo-1494548162494-384bba4ab999";

  if (isLoading) {
    return <></>;
  }

  return (
    <Box>
      <Typography sx={style} color="primary" gutterBottom variant="h6" component="div">
        Suggested playlists
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {latestAlbums?.map((album) => (
          <Grid size={6} key={album?.name!}>
              <PlaylistCard name={album?.name!} avaterPicture={avatarImage} artist={album?.artist.name!} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuggestedPlaylists;
