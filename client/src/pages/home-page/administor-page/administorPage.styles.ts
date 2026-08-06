import { SxProps } from "@mui/material";

const administorPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  mt: 10,
  minHeight: "100vh",
  alignItems: "center",
  bgcolor: "#0a0a0a",
};

const title: SxProps = {
  color: "#f8f8f8",
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: "1.5%",
  width: 80,
  cursor: "pointer",
  alignSelf: "flex-start",
  paddingLeft: "1%",
};

export default { administorPage, title, backIcon };
