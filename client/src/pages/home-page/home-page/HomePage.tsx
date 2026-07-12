import { Box } from "@mui/material";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import LastPlaylists from "../../../components/recent-playlist/RecentPlaylists.tsx";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists.tsx";
import style from "../home-page/homePage.style.ts";


const HomePage: React.FC = () => {
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
