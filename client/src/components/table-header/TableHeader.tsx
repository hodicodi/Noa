import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import Styles from "../../pages/home-page/handle-users-page/handleUsersPage.styles.ts";
import AddIcon from "@mui/icons-material/Add";

type TableHeaderProps = {
  handleAddRow: () => void;
  columnNames: String[];
};

const TableHeader: FC<TableHeaderProps> = ({ handleAddRow, columnNames }) => (
  <TableHead>
    <TableRow>
      {columnNames.map((columnName) => (<TableCell sx={Styles.tableCell}>{columnName}</TableCell>))}
      <TableCell sx={Styles.tableCell} align="center">
        <AddIcon onClick={handleAddRow} />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center" />
    </TableRow>
  </TableHead>
);

export default TableHeader;
