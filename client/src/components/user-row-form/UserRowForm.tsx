import { Checkbox, TableCell, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { userRowFormProps } from "./userRowForm.consts.ts";
import SaveIcon from "@mui/icons-material/Save";

const UserRowFrom: FC<userRowFormProps> = ({ user, handleSubmit, onSubmit }) => {
  const { control } = useFormContext();

  return (
    <>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => <TextField {...field} sx={Styles.textField} variant="standard" fullWidth />}
        />
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        <Controller
          name="tz"
          control={control}
          render={({ field, fieldState: { error } }) => <TextField {...field} sx={Styles.textField} variant="standard" fullWidth />}
        />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <Controller
          name="isAdministor"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Checkbox {...field} onChange={(e) => field.onChange(e.target.checked)} sx={Styles.checkbox} checked={!!field.value} />
          )}
        />
      </TableCell>

      <TableCell onClick={handleSubmit(onSubmit)} sx={Styles.tableCell} align="center">
        <SaveIcon />
      </TableCell>
    </>
  );
};

export default UserRowFrom;
