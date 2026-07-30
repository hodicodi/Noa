import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import Styles from "../../pages/home-page/handle-users-page/handleUsersPage.styles.ts";
import AddIcon from "@mui/icons-material/Add";

type HandleAlbumHeadTableProps = {
  handleAddRow: () => void;
};

const HandleAlbumsTableHead: FC<HandleAlbumHeadTableProps> = ({ handleAddRow }) => (
  <TableHead>
    <TableRow>
      <TableCell sx={Styles.tableCell}>Album name</TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Artist name
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        Album picture
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <AddIcon onClick={handleAddRow} />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center" />
    </TableRow>
  </TableHead>
);

export default HandleAlbumsTableHead;
