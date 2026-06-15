import { SxProps } from "@mui/material";

const app: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const loading: SxProps = {
  minHeight: "100%",
  display: "grid",
  placeItems: "center",
};

const backgound: SxProps = {
  minHeight: "100%",
  bgcolor: "#000000",
  width: { xs: "100%", sm: "30%" },
};



const appContent: SxProps = {
  p: 2,
};

export default { app, loading, backgound, appContent };
