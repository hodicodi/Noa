import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PlaylistOverviewProps } from '../../../../shared/playlistOverview';

export default function LastPlaylistCard({name, avaterPicture}: PlaylistOverviewProps) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <Box sx={{ flexGrow: 1  }}>
        <Grid container spacing={2}>
          <Grid size={4}>
              <CardMedia
                sx={{ height: 100 }}
                component="img"
                image="https://images.unsplash.com/photo-1494548162494-384bba4ab999"
                alt="Beautiful Sunrise"      />
            </Grid>
          <Grid size={8}>
            <CardContent >
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
