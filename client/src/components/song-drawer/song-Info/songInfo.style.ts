import { SxProps } from "@mui/material";

const songMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 5,
};

const imgContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const songImg: SxProps = {
  height: "80%",
  width: "80%",
  borderRadius: 3,
};

const artistName: SxProps = {
  color: "#ffffff",
  width: "40%",
  fontFamily: "Georgia",
};

const songInfoContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const card: SxProps = {
  width: "80%",
  alignSelf: "center",
  bgcolor: "#000",
};

const cardContent: SxProps = {
  display: "flex",
  height: 40,
  alignItems: "center",
};

const songName: SxProps = {
  fontWeight: "bold",
  height: 28,
  width: 150,
  fontFamily: "Georgia",
  color: "rgb(238, 229, 229)",
};

const plusIcon: SxProps = {
  color: "#fffbfb",
};

export default {
  songMainPreview,
  imgContainer,
  songImg,
  artistName,
  card,
  cardContent,
  songInfoContainer,
  plusIcon,
  songName,
};
