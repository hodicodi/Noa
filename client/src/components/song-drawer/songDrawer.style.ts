import { CardContent, SxProps } from "@mui/material";

const songDrawer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  top: 'auto',
  bottom: 0,
  bgcolor: "#47025c",
  width: { xs: "100%", sm: "30%" },
  flexDirection: "column",
  left: '35%'
};

const card: SxProps = {
  bgcolor: "#47025c",
  width: 540
};

const box: SxProps = {
  flexGrow: 1,
};

const cardMedia: SxProps = {
  height: 40,
  width: 40,
};

const cardContent: SxProps = {
  height: 40,
};

const playlistName: SxProps = {
  color: "#ffffff",
};
export default {songDrawer, card, box, cardMedia, cardContent, playlistName}