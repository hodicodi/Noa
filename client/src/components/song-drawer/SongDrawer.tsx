import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Toolbar,
    Typography
} from "@mui/material";
import { FC, useState } from "react";
import Styles from "./songDrawer.style.ts";

const SongDrawer: FC = () => {
  const [open, setOpen] = useState(true);

    const avatarImage =
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999";


  return (
    <>
      <AppBar position="fixed" sx={Styles.songDrawer}>
        <Toolbar>
            <Card sx={Styles.card} >
                    <Box sx={Styles.box}>
                    <Grid container spacing={0}>
                        <Grid size={1.9}>
                        <CardMedia
                            sx={Styles.cardMedia}
                            component="img"
                            image={avatarImage}
                            alt="Beautiful Sunrise"
                        />
                        </Grid>
                        <Grid size={10.1}>
                        <CardContent sx={Styles.cardContent}>
                            <Typography
                            sx={Styles.playlistName}
                            gutterBottom
                            variant="h6"
                            component="div"
                            >
                            {"Ahavat HInam"}
                            </Typography>
                        </CardContent>
                        </Grid>
                    </Grid>
                    </Box>
                </Card>        
                </Toolbar>
      </AppBar>
      
      <Toolbar />
    </>
  );
};

export default SongDrawer;
