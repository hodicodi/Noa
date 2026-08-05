import { SxProps } from "@mui/material";

const autoCompleteTextField: SxProps = {
  input: { color: "white" },
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
};

const autoComplete: SxProps = {
  '& .MuiSvgIcon-root': {
      color: 'white',
    },
};

const handleUsersPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  mt: 4,
  minHeight: "100%",
  alignItems: "center",
};

const tableCell: SxProps = {
  color: "#fffefe",
  width: "1%",
};

const textField: SxProps = {
  input: { color: "white" },
  "& .MuiInput-underline:before": { borderBottomColor: "rgba(253, 253, 253, 0.42)" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "white" },
  "& .MuiInput-underline:after": { borderBottomColor: "white" },
};

const TableRow: SxProps = {
  "&:last-child td, &:last-child th": { border: 0 },
};

export default { autoComplete, tableCell, textField, TableRow, autoCompleteTextField };
