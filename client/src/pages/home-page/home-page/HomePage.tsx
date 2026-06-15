import { Box } from "@mui/material";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists";
import style from "./homePage.style";
import LastPlaylists from "../../../components/recent-playlist/recentPlaylists";
import NavBar from "../../../components/nav-bar/navBar";

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
