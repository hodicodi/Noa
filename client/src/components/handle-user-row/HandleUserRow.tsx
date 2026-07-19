import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TextField } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FC, useState } from "react";
import Styles from "./handleUserRow.style.ts";
import { SaveUser, User } from "@shared/src/types/user.type.ts";
import { saveUser } from "../../hooks/useUser.ts";
import { useMutation } from "@tanstack/react-query";

type handleUserRowProps = {
  user: User;
  edit: boolean
};

const HandleUserRow: FC<handleUserRowProps> = ({ user, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, uuid, ...saveUserProps } = user;
  const [currentUser, setCurrentUser] = useState<SaveUser>(saveUserProps);

  const mutationPatchUser = useMutation({ mutationFn: () => saveUser(currentUser) });

  const toggleEditSaveClick = (): void => {
    setIsEditMode((prev) => !prev);
    if (isEditMode) {
      mutationPatchUser.mutate();
    }
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setCurrentUser((prev) => ({
      ...prev,
      isAdministor: isChecked,
    }));
  };

  const handleNameChange = (newName: string) => {
    setCurrentUser((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  const handleTzChange = (newTz: string) => {
    setCurrentUser((prev) => ({
      ...prev,
      tz: newTz,
    }));
  };

  return (
    <TableRow key={currentUser.tz} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {isEditMode ? (
          <TextField sx={Styles.textField} variant="standard" value={currentUser.name} onChange={(e) => handleNameChange(e.target.value)} fullWidth />
        ) : (
          currentUser.name
        )}
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {isEditMode ? (
          <TextField sx={Styles.textField} variant="standard" value={currentUser.tz} onChange={(e) => handleTzChange(e.target.value)} fullWidth />
        ) : (
          currentUser.tz
        )}
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <Checkbox
          sx={Styles.checkbox}
          disabled={!isEditMode}
          checked={Boolean(currentUser.isAdministor)}
          onChange={(event) => handleCheckboxChange(event.target.checked)}
        />
      </TableCell>
      <TableCell onClick={toggleEditSaveClick} sx={Styles.tableCell} align="center">
        {!isEditMode ? <EditIcon /> : <SaveIcon />}
      </TableCell>
    </TableRow>
  );
};

export default HandleUserRow;
