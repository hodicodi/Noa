import { MenuItem, SxProps } from "@mui/material";

const userBar: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
  bgcolor: "#47025c",
};

const dropdown: SxProps = {
  "& .MuiMenu-paper": {
    justifyContent: "flex-start",
    backgroundColor: "#47025c",
    color: "#ffffff",
  },
  justifyContent: "flex-start",
};

const menuItem: SxProps = {
  textAlign: "left",
  alignSelf: "flex-start",
  paddingLeft: 0,
};

export default { userBar, dropdown, menuItem };
