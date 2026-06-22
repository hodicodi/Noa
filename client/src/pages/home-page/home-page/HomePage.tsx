import { Box } from "@mui/material";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists.tsx";
import style from "../home-page/homePage.style.ts";
import LastPlaylists from "../../../components/recent-playlist/RecentPlaylists.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import { albumService } from "../../../api/services/albumService.ts";
import {GetAlbumRequest} from "@shared/src/types/album.types.ts";


const HomePage: React.FC = () => {
  // console.log("recieved album: " + albumService.getAlbumByName({albumName:"Torah lesson"}));
  return (
    <>
      <NavBar />
      <Box sx={style.homePage}>
        <LastPlaylists />
        <SuggestedPlaylists />
      </Box>
    </>
  );
};

export default HomePage;
