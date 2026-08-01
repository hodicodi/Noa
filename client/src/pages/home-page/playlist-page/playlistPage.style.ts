import { SxProps } from "@mui/material";

const playlistPage: SxProps = {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    borderRadius: 7, 
    mt: 4
}

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 4,
  left: "7%",
  width: 40,
  cursor: "pointer",
};

export default {playlistPage, backIcon};