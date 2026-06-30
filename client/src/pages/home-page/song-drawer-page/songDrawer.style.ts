import { SxProps } from "@mui/material";

const songDrawerPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  borderRadius: 7,
  mt: '27%',
};

const songMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
};

const playMainPreview: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 1,
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 4,
  left: "7%",
  width: 40,
  cursor: "pointer",
};

export default { songDrawerPage, songMainPreview, playMainPreview, backIcon };
