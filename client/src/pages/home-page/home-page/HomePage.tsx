import { Box } from "@mui/material";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import LastPlaylists from "../../../components/recent-playlist/RecentPlaylists.tsx";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists.tsx";
import style from "../home-page/homePage.style.ts";
import SongDrawer from "../../../components/song-drawer/songDrawer.tsx";


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
