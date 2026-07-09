import { SxProps } from "@mui/material";
const drawerWidth = { xs: "100%", sm: "30%" };

const songDrawer: SxProps = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    left: "34.7%",
    height: "100%",
    bgcolor: "#000000",
  },
};

const songDrawerPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  borderRadius: 7,
  mt: "27%",
};

const songMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
};

const playMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 1,
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 4,
  left: "7%",
  width: 40,
  cursor: "pointer",
};

export default { songDrawer, songDrawerPage, songMainPreview, playMainPreview, backIcon };
