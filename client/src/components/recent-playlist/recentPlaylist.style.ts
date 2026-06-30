import { SxProps } from "@mui/material";

const card: SxProps = {
  maxWidth: 345,
  bgcolor: "#000000",
  borderRadius: 2,
};

const box: SxProps = {
  flexGrow: 1,
};

const cardMedia: SxProps = {
  height: 40,
  width: 40,
  borderRadius: 1,
};

const cardContent: SxProps = {
  backgroundColor: "#47025c",
  height: 40,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const playlistName: SxProps = {
  color: "#ffffff",
  height: 8,
};

export default { card, box, cardMedia, cardContent, playlistName };
