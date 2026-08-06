import { SxProps } from "@mui/material";

const playlistPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  borderRadius: 7,
  mt: "5%",
  paddingLeft: "5%",
  height: "1000px"
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: "1%",
  width: 40,
  cursor: "pointer",
};

const playlistPicture: SxProps = {
  mt: "13%",
};

export default { playlistPage, backIcon, playlistPicture };
