import { SxProps } from "@mui/material";

const handleUsersPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  mt: 4,
  minHeight: "100vh",
  alignItems: "center",
};

const table: SxProps = {
  bgcolor: "rgba(94, 94, 94, 0.5)",
};

const tableCell: SxProps = {
  color: "#fffefe",
  width: "1%",
};

const searchableTable: SxProps = {
  width: "93%",
};

const title: SxProps = {
  color: "#f8f8f8",
};

const searchBarInputField: SxProps = {
  marginBottom: 3,
  backgroundColor: "#fff",
};

const backIcon: SxProps = {
  position: "absolute",
  color: "#ffffff",
  mt: 4,
  width: 80,
  cursor: "pointer",
  alignSelf: "flex-start",
  paddingLeft: "0.8%",
};

export default { handleUsersPage, table, tableCell, searchableTable, title, searchBarInputField, backIcon };
