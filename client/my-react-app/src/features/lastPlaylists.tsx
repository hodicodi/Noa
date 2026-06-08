import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LastPlaylistCard from '../components/lastPlaylistCard';


const Item = styled(Paper)(({ theme }) => ({
}));

export default function LastPlaylists() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="happier than ever" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
            </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="hit me hard and soft" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="don't simple at me" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="when we all fall" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}