import EditIcon from "@mui/icons-material/Edit";
import { Checkbox, TableCell } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";

 type userRowPreviewProps = {
  user: User;
  toggleEditMode: () => void;
};

const UserRowPreview: FC<userRowPreviewProps> = ({ user, toggleEditMode }) => {
  const { control } = useFormContext();

  return (
    <>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {user.tz}
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <Controller
          name="isAdministor"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Checkbox {...field} onChange={(e) => field.onChange(e.target.checked)} sx={Styles.checkbox} disabled={true} checked={!!field.value} />
          )}
        />
      </TableCell>
      <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
        <EditIcon />
      </TableCell>
    </>
  );
};

export default UserRowPreview;
