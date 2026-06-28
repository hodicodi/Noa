import { SxProps } from "@mui/material";
const drawerWidth = { xs: "100%", sm: "30%" }; // Define your custom width here

const songDrawer: SxProps = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    left: "34.7%",
    height: "100%",
    bgcolor: "#000000"
  },
};

export default { songDrawer };
