import { SxProps } from "@mui/material";

const playlistPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  borderRadius: 7,
  mt: 4,
  paddingLeft: "5%",
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 4,
  width: 40,
  cursor: "pointer",
};

const playlistPicture: SxProps = {
  mt: 14,
};

export default { playlistPage, backIcon, playlistPicture };
