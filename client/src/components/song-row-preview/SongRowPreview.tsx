import EditIcon from "@mui/icons-material/Edit";
import { TableCell } from "@mui/material";
import { Song } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import Styles from "../handle-user-row/handleUserRow.style.ts";

type SongRowPreviewProps = {
  song: Song;
  toggleEditMode: () => void;
};

const SongRowPreview: FC<SongRowPreviewProps> = ({ song, toggleEditMode }) => (
  <>
    <TableCell sx={Styles.tableCell} component="th" scope="row">
      {song.name}
    </TableCell>
    <TableCell sx={Styles.tableCell} component="th" scope="row">
      {song.genre}
    </TableCell>
    <TableCell sx={Styles.tableCell} component="th" scope="row">
      {song.album.name}
    </TableCell>
    <TableCell sx={Styles.tableCell} component="th" scope="row" />
    <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
      <EditIcon />
    </TableCell>
    <TableCell sx={Styles.tableCell} align="center" />
  </>
);

export default SongRowPreview;
