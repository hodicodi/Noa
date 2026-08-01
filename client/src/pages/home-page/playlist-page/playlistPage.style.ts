import { SxProps } from "@mui/material";

const playlistPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  borderRadius: 7,
  mt: 4,
  paddingLeft: "5%",
  height: "800PX"
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 1,
  width: 40,
  cursor: "pointer",
};

const playlistPicture: SxProps = {
  mt: 8,
};

export default { playlistPage, backIcon, playlistPicture };
