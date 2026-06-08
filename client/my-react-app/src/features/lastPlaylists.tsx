import {
  Box,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LastPlaylistCard from '../components/lastPlaylistCard';


const Item = styled(Paper)(({ theme }) => ({
}));

export default function LastPlaylists() {
  return (
    <Box sx={{ width: '100%'}}>
        <Typography color="primary" gutterBottom variant="h6" component="div" >
            recent listenings 
        </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="happier" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
            </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="hit" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="don't" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <LastPlaylistCard name="when" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></LastPlaylistCard>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}