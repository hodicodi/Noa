import { SxProps } from "@mui/material";

const loginPage: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
};

const card: SxProps = {
  maxWidth: 420,
  width: "100%",
  boxShadow: 3,
};

const cardContent: SxProps = {
  textAlign: "center",
  p: 4,
};

const welcome: SxProps = {
  fontWeight: "bold",
  mb: 1,
  
};

const sign: SxProps = {
  color: "text.secondary",
  mb: 3,
};

export default { loginPage, card, cardContent, welcome, sign };