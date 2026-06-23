import { SxProps } from "@mui/material";

const card: SxProps = {
  maxWidth: 345,
  bgcolor: "#000000",
};

const box: SxProps = {
  flexGrow: 1,
};

const cardMedia: SxProps = {
  height: 40,
  width: 40,
};

const cardContent: SxProps = {
  backgroundColor: "#47025c",
  height: 40,
  alignItems: "center",
};

const playlistName: SxProps = {
  color: "#ffffff",
};

export default { card, box, cardMedia, cardContent, playlistName };
