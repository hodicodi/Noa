import { Box, Typography } from "@mui/material";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import Style from "../administor-page/administorPage.styles.ts";

const HandleUsersPage: React.FC = () => {

  return (
    <>
      <NavBar />
      <Box sx={Style.administorPage}>
        <Typography variant="h3" sx={{ color: "#f8f8f8" }}>
          Administor actions
        </Typography>

      </Box>      
    </>
  );
};

export default HandleUsersPage;
