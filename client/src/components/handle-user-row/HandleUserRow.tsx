import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TextField } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { SaveUser, User } from "@shared/src/types/user.type.ts";
import { FC, useEffect, useState } from "react";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import Styles from "./handleUserRow.style.ts";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";

type handleUserRowProps = {
  user: User;
  edit: boolean;
};

const HandleUserRow: FC<handleUserRowProps> = ({ user, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveUserProps } = user;
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);
  const { mutate: saveUser } = useSaveUser(toggleEditMode);

  const formDefaultValues = {
    name: "", tz: "", isAdministor: false
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: formDefaultValues,
  });

  const onSubmit = (formData: UserRegistrationInput) => {
    saveUser({ uuid: user.uuid, ...formData });
  };

  useEffect(() => {
    reset({ name: user.name, tz: user.tz, isAdministor: user.isAdministor });
  }, [user]);

  return (
    <TableRow key={user.tz} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {isEditMode ? (
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => <TextField {...field} sx={Styles.textField} variant="standard" fullWidth />}
          />
        ) : (
          user.name
        )}
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {isEditMode ? (
          <Controller
            name="tz"
            control={control}
            render={({ field, fieldState: { error } }) => <TextField {...field} sx={Styles.textField} variant="standard" fullWidth />}
          />
        ) : (
          user.tz
        )}
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <Controller
          name="isAdministor"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Checkbox {...field} onChange={(e) => field.onChange(e.target.checked)} sx={Styles.checkbox} disabled={!isEditMode} checked={!!field.value} />
          )}
        />
      </TableCell>

      {isEditMode ? (
        <TableCell onClick={handleSubmit(onSubmit)} sx={Styles.tableCell} align="center">
          <SaveIcon />
        </TableCell>
      ) : (
        <TableCell onClick={toggleEditMode} sx={Styles.tableCell} align="center">
          <EditIcon />
        </TableCell>
      )}
    </TableRow>
  );
};

export default HandleUserRow;
