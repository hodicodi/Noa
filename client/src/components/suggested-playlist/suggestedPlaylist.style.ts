import { SxProps } from "@mui/material";

const card: SxProps = {
  maxWidth: 345,
};

const cardMedia: SxProps = {
  height: 260,
  width: 260,
};

const cardContent: SxProps = {
  position: "absolute",
  backgroundColor: "rgba(83, 3, 79, 0.5)",
  width: "13.7%",
};

const playlistName: SxProps = {
  color: "#ffffff",
  position: "top",
};

export default { card, cardMedia, cardContent, playlistName};
