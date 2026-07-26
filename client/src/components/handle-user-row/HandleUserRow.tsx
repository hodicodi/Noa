import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import UserRowFrom from "../user-row-form/UserRowForm.tsx";
import UserRowPreview from "../user-row-preview/UserRowPreview.tsx";
import Styles from "./handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";

type handleUserRowProps = {
  user: User;
  edit: boolean;
};

const HandleUserRow: FC<handleUserRowProps> = ({ user, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveUserProps } = user;
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);
  const { mutate: saveUser } = useSaveUser(toggleEditMode);

  const formMethods = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: { name: "", tz: "", isAdministor: false },
  });

  const resetFormFields = () => {
    formMethods.reset(user);
  };

  useEffect(() => {
    resetFormFields();
  }, [user]);

  return (
    <TableRow key={user.tz} sx={Styles.TableRow}>
      <FormProvider {...formMethods}>
        {isEditMode ? <UserRowFrom onSaveUseSucsses={toggleEditMode} user={user} /> : <UserRowPreview user={user} toggleEditMode={toggleEditMode} />}
      </FormProvider>
    </TableRow>
  );
};

export default HandleUserRow;
