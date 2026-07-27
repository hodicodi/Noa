import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, TableCell } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";
import { Album } from "@shared/src/types/album.types.ts";

type AlbumRowPreviewProps = {
  album: Album;
  toggleEditMode: () => void;
};

const AlbumRowPreview: FC<AlbumRowPreviewProps> = ({ album, toggleEditMode }) => (
  <>
    <TableCell sx={Styles.tableCell} component="th" scope="row">
      {album.name}
    </TableCell>
    <TableCell sx={Styles.tableCell} component="th" scope="row">
      {album.artist.name}
    </TableCell>
    <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
      <EditIcon />
    </TableCell>
    <TableCell sx={Styles.tableCell} align="center" />
  </>
);

export default AlbumRowPreview;
