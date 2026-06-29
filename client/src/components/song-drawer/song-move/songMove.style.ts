import { SxProps } from "@mui/material";


const box: SxProps = {
  display: "flex" /* Aligns children horizontally */,
  justifyContent: "space-between" /* Distributes items evenly across the box */,
  gap: 2 /* Optional: adds a gap between the items */,
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
  }
};



const moveIcon: SxProps = {
  color: "#fffefe",
  width: 80,
  height: 80,
};

export default {
  plusIcon,
  box,
  moveIcon,
};
