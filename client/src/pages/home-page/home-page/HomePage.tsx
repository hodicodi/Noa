import { Box } from "@mui/material";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import LastPlaylists from "../../../components/recent-playlist/RecentPlaylists.tsx";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists.tsx";
import style from "../home-page/homePage.style.ts";
import AudioUpload from "../../../components/upload-song/SongUpload.tsx";


const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <AudioUpload/>
        <Box sx={style.homePage}>
          <LastPlaylists />
          <SuggestedPlaylists />
        </Box>
    </>
  );
};

export default HomePage;
