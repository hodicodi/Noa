import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import UserRowFrom from "../user-row-form/UserRowForm.tsx";
import UserRowPreview from "../user-row-preview/UserRowPreview.tsx";
import { formDefaultValues, handleArtistRowProps,  } from "./HandleUserRow.consts.ts";
import Styles from "./handleUserRow.style.ts";

const HandleArtistRow: FC<handleArtistRowProps> = ({ artist, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveArtistProps } = artist;
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);
  const { mutate: saveUser } = useSaveUser(toggleEditMode);

  const formMethods = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: formDefaultValues,
  });



  const resetFormFields = () => {
    formMethods.reset({ name: artist.name, type: artist.type});
  };

  useEffect(() => {
    resetFormFields();
  }, [artist]);

  return (
    <TableRow key={artist.uuid} sx={Styles.TableRow}>
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

export default HandleArtistRow;
