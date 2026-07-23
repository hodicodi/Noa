import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import UserRowFrom from "../user-row-form/UserRowForm.tsx";
import UserRowPreview from "../user-row-preview/UserRowPreview.tsx";
import { formDefaultValues, handleUserRowProps } from "./HandleUserRow.consts.ts";
import Styles from "./handleUserRow.style.ts";

const HandleUserRow: FC<handleUserRowProps> = ({ user, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveUserProps } = user;
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);
  const { mutate: saveUser } = useSaveUser(toggleEditMode);

  const formMethods = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: formDefaultValues,
  });



  const resetFormFields = () => {
    formMethods.reset({ name: user.name, tz: user.tz, isAdministor: user.isAdministor });
  };

  useEffect(() => {
    resetFormFields();
  }, [user]);

  return (
    <TableRow key={user.tz} sx={Styles.TableRow}>
      <FormProvider {...formMethods}>
        {isEditMode ? (
          <UserRowFrom onSaveUseSucsses={toggleEditMode} user={user}/>
        ) : (
          <UserRowPreview user={user} toggleEditMode={toggleEditMode} />
        )}
      </FormProvider>
    </TableRow>
  );
};

export default HandleUserRow;
