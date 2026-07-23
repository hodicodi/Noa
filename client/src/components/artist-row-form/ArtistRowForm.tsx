import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TableCell, TextField } from "@mui/material";
import { UserRegistrationInput } from "@shared/src/schemas/userValidation.schema.ts";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";
import { Artist } from "@shared/src/types/artist.type.ts";
import { useSaveArtist } from "../../hooks/useSaveArtist.ts";
import { ArtistRegistrationInput } from "@shared/src/schemas/artistValidation.schema.ts";

type ArtistRowFormProps = {
  onSaveUseSucsses: () => void;
  artist: Artist;
};

const ArtistRowFrom: FC<ArtistRowFormProps> = ({ onSaveUseSucsses, artist }) => {
  const { control, handleSubmit } = useFormContext<ArtistRegistrationInput>();
  const { mutate: saveArtist } = useSaveArtist(onSaveUseSucsses);

  const onSubmit = (formData: ArtistRegistrationInput) => {
    saveArtist({ uuid: artist.uuid, ...formData });
  };

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
