import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LastPlaylists from "../features/lastPlaylists";
import SuggestedPlaylists from "../features/suggestedPlaylists";

const Item = styled(Paper)(({ theme }) => ({
}));

export default function HomePage() {
  return (
    <> 
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 18 }}>
        <LastPlaylists></LastPlaylists> 
        <SuggestedPlaylists></SuggestedPlaylists>
    </Box>

    </>
    /*
        <>
         <Grid container rowSpacing={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={12}>
                <Item>
                    <LastPlaylists></LastPlaylists>
                </Item>
            </Grid>
            <Grid size={12}>
                <Item>        
                    <SuggestedPlaylists></SuggestedPlaylists>
                </Item>
            </Grid>
        </Grid>
      </>
      */
  );
}
