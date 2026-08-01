import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import Styles from "../../pages/home-page/handle-users-page/handleUsersPage.styles.ts";
import AddIcon from "@mui/icons-material/Add";

type HandleSongHeadTableProps = {
  handleAddRow: () => void;
};

const HandleSongsTableHead: FC<HandleSongHeadTableProps> = ({ handleAddRow }) => (
  <TableHead>
    <TableRow>
      <TableCell sx={Styles.tableCell}>Name</TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Genre
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Album name
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Record file
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <AddIcon onClick={handleAddRow} />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center" />
    </TableRow>
  </TableHead>
);

export default HandleSongsTableHead;
