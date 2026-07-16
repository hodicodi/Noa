import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TextField } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FC, useState } from "react";
import Styles from "./handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";
import { usePatchUser } from "../../hooks/useUser.ts";

type handleUserRowProps = {
  user: User;
};

const HandleUserRow: FC<handleUserRowProps> = ({ user }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>(user);

  const toggleEditSaveClick = (): void => {
    //navigate(Path.EditUser);
    setIsEditMode((prev) => !prev);
    if(!isEditMode) {
      usePatchUser(currentUser.tz, currentUser)
        // send patch user request
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

  return (
    <TableRow key={currentUser.tz} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        {isEditMode ? (
          <TextField sx={Styles.textField} variant="standard" value={currentUser.name} onChange={(e) => handleNameChange(e.target.value)} fullWidth />
        ) : (
          currentUser.name
        )}
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        {currentUser.tz}
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
