import EditIcon from "@mui/icons-material/Edit";
import { TableCell } from "@mui/material";
import { Artist } from "@shared/src/types/artist.type.ts";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";

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

export default ArtistRowPreview;
