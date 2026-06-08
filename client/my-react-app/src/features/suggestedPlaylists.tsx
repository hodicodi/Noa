import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PlaylistCard from '../components/playlistCard';


const Item = styled(Paper)(({ theme }) => ({

}));

export default function SuggestedPlaylists() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>
            <PlaylistCard name="Igur" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></PlaylistCard>
            </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <PlaylistCard name="Flower Boy" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></PlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <PlaylistCard name="CHROMAKAPIA" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></PlaylistCard>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <PlaylistCard name="Noid" avaterPicture = "../../../shared/playlistPictures/happierThanEver.jpg"></PlaylistCard>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}