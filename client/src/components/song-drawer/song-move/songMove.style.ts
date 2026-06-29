import { SxProps } from "@mui/material";


const box: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: 2,
  height: 40,
  alignItems: "center",
  alignSelf: "center",
};

const plusIcon: SxProps = {
  color: "#000000",
  bgcolor: "#ffffff",
  width: 60,
  height: 60,
  ":hover" : {
      bgcolor: "#ffffff",
  },
  marginLeft: "auto"
};



const moveIcon: SxProps = {
  color: "#fffefe",
  width: 80,
  height: 80,
  marginLeft: "auto"
};

export default {
  plusIcon,
  box,
  moveIcon,
};
