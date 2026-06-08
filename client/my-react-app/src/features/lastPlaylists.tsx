import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MediaCard from '../components/lastPlaylistCard';


const Item = styled(Paper)(({ theme }) => ({

}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>
            <MediaCard name="happier than ever" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></MediaCard>
            </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <MediaCard name="hit me hard and soft" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></MediaCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <MediaCard name="don't simple at me" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></MediaCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <MediaCard name="when we all fall a sleep" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></MediaCard>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}