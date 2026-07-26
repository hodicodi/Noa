import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import Styles from "../../pages/home-page/handle-users-page/handleUsersPage.styles.ts";
import AddIcon from "@mui/icons-material/Add";

type handleUserHeadTableProps = {
  handleAddRow: () => void;
};

const HandleUsersTableHead: FC<handleUserHeadTableProps> = ({ handleAddRow }) => {
  <TableHead>
    <TableRow>
      <TableCell sx={Styles.tableCell}>User name</TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Id
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Is administor
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <AddIcon onClick={handleAddRow} />
      </TableCell>
    </TableRow>
  </TableHead>;
};

export default HandleUsersTableHead;
