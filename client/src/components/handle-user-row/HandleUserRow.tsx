import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TextField } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { SaveUser, User } from "@shared/src/types/user.type.ts";
import { FC, useState } from "react";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import Styles from "./handleUserRow.style.ts";

type handleUserRowProps = {
  user: User;
  edit: boolean;
};

const HandleUserRow: FC<handleUserRowProps> = ({ user, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveUserProps } = user;
  const [currentUser, setCurrentUser] = useState<SaveUser>(saveUserProps);

  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);

  const { mutate: saveUserMutation } = useSaveUser(toggleEditMode);



  const editIconClick = (): void => {
    if (isEditMode) {
      saveUserMutation(currentUser);
    } else {
      toggleEditMode();
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
      <TableCell onClick={editIconClick} sx={Styles.tableCell} align="center">
        {!isEditMode ? <EditIcon /> : <SaveIcon />}
      </TableCell>
    </TableRow>
  );
};

export default HandleUserRow;
