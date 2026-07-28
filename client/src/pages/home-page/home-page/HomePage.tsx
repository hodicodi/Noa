import { Box } from "@mui/material";
import LastPlaylists from "../../../components/recent-playlist/RecentPlaylists.tsx";
import SuggestedPlaylists from "../../../components/suggested-playlist/suggestedPlaylists.tsx";
import style from "../home-page/homePage.style.ts";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import { FC } from "react";


const HomePage: FC = () => {

  
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
