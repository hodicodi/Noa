import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { ArtistRegistrationInput, ArtistRegistrationSchema } from "@shared/src/schemas/artistValidation.schema.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import UserRowFrom from "../user-row-form/UserRowForm.tsx";
import UserRowPreview from "../user-row-preview/UserRowPreview.tsx";
import { formDefaultValues, handleArtistRowProps,  } from "./HandleArtistRow.consts.ts";
import Styles from "./handleArtistRow.style.ts";

const HandleArtistRow: FC<handleArtistRowProps> = ({ artist, edit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const { createDate, deleteDate, ...saveArtistProps } = artist;
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);
  const { mutate: saveUser } = useSaveUser(toggleEditMode);

  const formMethods = useForm<ArtistRegistrationInput>({
    resolver: zodResolver(ArtistRegistrationSchema),
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
