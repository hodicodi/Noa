import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";
import { User } from "@shared/src/types/user.type.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import UserRowFrom from "../user-row-form/UserRowForm.tsx";
import Styles from "./handleUserRow.style.ts";
import RowPreview from "../row-preview/RowPreview.tsx";
import { ColumnValue } from "../row-preview/rowPreview.consts.tsx";

type HandleUserRowProps = {
  user: User;
  edit: boolean;
  setCurrentUsers: (users: User[]) => void;
  currentUsers: User[];
  setExistingUser: () => void;
};

const HandleUserRow: FC<HandleUserRowProps> = ({ user, edit, setCurrentUsers, currentUsers, setExistingUser }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);

  const columnValues: ColumnValue[] = [
    { value: user.name },
    { value: user.tz},
    { isChecked: user.isAdministor }
  ];

  const formMethods = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: { name: "", tz: "", isAdministor: false },
  });

  useEffect(() => {
    formMethods.reset(user);
  }, [user]);

  return (
    <TableRow key={user.uuid} sx={Styles.TableRow}>
      <FormProvider {...formMethods}>
        {isEditMode ? (
          <UserRowFrom
            onSaveUseSucsses={toggleEditMode}
            user={user}
            setIsEditMode={setIsEditMode}
            setCurrentUsers={setCurrentUsers}
            currentUsers={currentUsers}
            setExistingUser={setExistingUser}
          />
        ) : (
          <RowPreview columnValues={columnValues} toggleEditMode={toggleEditMode} />
        )}
      </FormProvider>
    </TableRow>
  );
};

export default HandleUserRow;
