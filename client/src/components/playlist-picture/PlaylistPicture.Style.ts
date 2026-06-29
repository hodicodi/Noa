import { SxProps } from "@mui/material";

const playlistMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
};

const imgContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const playlistImg: SxProps = {
  height: "70%",
  width: "70%",
  borderRadius: 3,
};

const icon: SxProps = {
  height: "10%",
  width: "10%",
};

const icons: SxProps = {
  columnGap: 4,
};

const playlistName: SxProps = {
  color: "#ffffff",
  position: "top",
};

const artistName: SxProps = {
  color: "#ffffff",
  position: "top",
  fontFamily: "Courier New",
};

export default {
  playlistMainPreview,
  imgContainer,
  playlistImg,
  playlistName,
  artistName,
  icon,
  icons,
};
