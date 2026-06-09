import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PlaylistOverviewProps } from "../../../../../shared/playlistProps.ts";
import style from "./recentPlaylist.style.ts";

const LastPlaylistCard: React.FC<PlaylistOverviewProps> = ({
  name,
  avaterPicture,
}: PlaylistOverviewProps) => {
  {
    return (
      <Card sx={style.card}>
        <Box sx={style.box}>
          <Grid container spacing={0}>
            <Grid size={1.9}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                image={avaterPicture}
                alt="Beautiful Sunrise"
              />
            </Grid>
            <Grid size={10.1}>
              <CardContent sx={style.cardContent}>
                <Typography
                  sx={style.playlistName}
                  gutterBottom
                  variant="body2"
                  component="div"
                >
                  {name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
  }
};

export default LastPlaylistCard;
