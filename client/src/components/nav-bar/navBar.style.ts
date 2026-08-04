import { MenuItem, SxProps } from "@mui/material";

const userBar: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
  bgcolor: "rgba(94, 94, 94, 0.5)",
};

const dropdown: SxProps = {
  "& .MuiMenu-paper": {
    justifyContent: "flex-start",
  bgcolor: "rgb(49, 48, 48)",
    color: "#ffffff",
    paddingLeft: '0.2%',
  },
  justifyContent: "flex-start",
};

const menuItem: SxProps = {
  textAlign: "left",
  alignSelf: "flex-start",
  paddingLeft: '7%',
};

const userName: SxProps = {
  textAlign: "right",
  paddingRight: '1%',
  color: "#faf5f5"
};

const supervisor: SxProps = {
  textAlign: "left",
  alignSelf: "flex-start",
  paddingLeft: '1%',
  color: "#faf5f5"
};

export default { userBar, dropdown, menuItem, userName, supervisor };
