import { SxProps } from "@mui/material";


const box: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: "px",
  height: "40px",
  alignItems: "center",
  alignSelf: "center",
};

const playIcon: SxProps = {
  color: "#000000",
  bgcolor: "#ffffff",
  width: "60px",
  height: "60px",
  ":hover" : {
      bgcolor: "#ffffff",
  },
  marginLeft: "auto"
};


const moveIcon: SxProps = {
  color: "#fffefe",
  width: "80px",
  height: "80px",
  marginLeft: "auto"
};

export default {
  playIcon,
  box,
  moveIcon,
};
