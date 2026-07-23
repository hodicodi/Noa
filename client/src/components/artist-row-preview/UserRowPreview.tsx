import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, TableCell } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";
import { Artist } from "@shared/src/types/artist.type.ts";

 type artistRowPreviewProps = {
  artist: Artist;
  toggleEditMode: () => void;
};

const ArtistRowPreview: FC<artistRowPreviewProps> = ({ artist, toggleEditMode }) => {
  const { control } = useFormContext();

  return (
    <>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {artist.name}
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {artist.type}
      </TableCell>
      <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
        <EditIcon />
      </TableCell>
    </>
  );
};

export default UserRowPreview;
