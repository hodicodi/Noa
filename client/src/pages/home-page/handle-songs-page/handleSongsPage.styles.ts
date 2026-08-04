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
  backgroundColor: "#47025c",
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

const searchBarInputField = {
  marginBottom: 3,
  backgroundColor: "#fff",
};

export default { handleUsersPage, table, tableCell, searchableTable, title, searchBarInputField };
