import { SxProps } from "@mui/material";

const artistName: SxProps = {
  color: "#ffffff",
  fontFamily: "Courier New",
};

const card: SxProps = {
  width: "80%",
  alignSelf: "center",
  bgcolor: "#000000",
  boxShadow: "none",
};

const cardContent: SxProps = {
  display: "flex",
  height: '40px',
  alignItems: "center",
};

const songName: SxProps = {
  fontWeight: "bold",
  color: "rgb(238, 229, 229)",
};

const plusIcon: SxProps = {
  color: "#fffbfb",
  marginLeft: "auto",
};

export default {
  artistName,
  card,
  cardContent,
  plusIcon,
  songName,
};
