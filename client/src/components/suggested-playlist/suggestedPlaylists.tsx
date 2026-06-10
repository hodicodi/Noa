import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PlaylistCard from "./suggestedPlaylist";
import playlistInfo from "../../../../shared/hardCodedInfo";
import style from "./suggestedPlaylists.style";

const Item = styled(Paper)(({ theme }) => ({}));

const SuggestedPlaylists: React.FC = () => {
  return (
    <Box>
      <Typography
        sx={style}
        color="primary"
        gutterBottom
        variant="h6"
        component="div"
      >
        Suggested playlists
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {playlistInfo.map((playlist) => (
          <Grid size={6} key={playlist.name}>
            <Item>
              <PlaylistCard
                name={playlist.name}
                avaterPicture={playlist.avaterPicture}
                artist={playlist.artist}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuggestedPlaylists;
