import { CardContent, SxProps } from "@mui/material";

const songPlaying: SxProps = {
  display: "flex",
  top: "auto",
  bottom: 0,
  bgcolor: "#47025c",
  width: { xs: "100%", sm: "30%" },
  left: "35%",
};

const card: SxProps = {
  bgcolor: "#47025c",
  width: 540,
  boxShadow: "none"
};

const box: SxProps = {
  flexGrow: 1,
};

const cardMedia: SxProps = {
  height: '40px',
  width: '40px',
  borderRadius: 2,
};

const cardContent: SxProps = {
  display: "flex",
  height: 40,
  alignItems: "center",
};

const playlistName: SxProps = {
  color: "#ffffff",
  fontWeight: "bold",
  height: 18,
  width: 150,
};

const artistName: SxProps = {
  color: "#ffffff",
  height: 16,
  width: 150,
  fontFamily: "Courier New",
};

const playIcon: SxProps = {
  color: "#fffbfb",
  marginLeft: "auto"
};
export default { songPlaying, card, box, cardMedia, cardContent, playlistName, artistName, playIcon };
