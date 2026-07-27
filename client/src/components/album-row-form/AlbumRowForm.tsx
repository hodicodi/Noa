import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, TableCell, TextField } from "@mui/material";
import { UserRegistrationInput } from "@shared/src/schemas/userValidation.schema.ts";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useSaveUser } from "../../hooks/useSaveUser.ts";
import Styles from "../handle-user-row/handleUserRow.style.ts";
import { User } from "@shared/src/types/user.type.ts";
import UndoIcon from "@mui/icons-material/Undo";
import { Album } from "@shared/src/types/album.types.ts";
import {AlbumRegistrationInput} from "@shared/src/schemas/albumValidation.schema.ts";
import { saveAlbum, useSaveAlbum } from "../../hooks/useSaveAlbum.ts";

type albumRowFormProps = {
  onSaveAlbumSucsses: () => void;
  album: Album;
  setiIsEditMode: (isEditMode: boolean) => void;
  setCurrentAlbums: (albums: Album[]) => void;
  currentAlbums: Album[];
};

const AlbumRowFrom: FC<albumRowFormProps> = ({ onSaveAlbumSucsses, album, setiIsEditMode, setCurrentAlbums, currentAlbums }) => {
  const { control, handleSubmit, reset } = useFormContext<AlbumRegistrationInput>();
  const { mutate: saveAlbum } = useSaveAlbum(onSaveAlbumSucsses);

  const onSubmit = (formData: AlbumRegistrationInput) => {
    saveAlbum(formData);
  };

  const handleUndo = () => {
    if (album.uuid) {
      setiIsEditMode(false);
      reset(album);
    } else {
      setCurrentAlbums(currentAlbums!.slice(1));
    }
  };

  return (
    <>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} error={!!error?.message} helperText={error?.message} sx={Styles.textField} variant="standard" fullWidth />
          )}
        />
      </TableCell>
      <TableCell sx={Styles.tableCell} component="th" scope="row">
        <Controller
          name="artist.name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} error={!!error?.message} helperText={error?.message} sx={Styles.textField} variant="standard" fullWidth />
          )}
        />
      </TableCell>
      <TableCell onClick={handleSubmit(onSubmit)} sx={Styles.tableCell} align="center">
        <SaveIcon />
      </TableCell>
      <TableCell onClick={handleUndo} sx={Styles.tableCell} align="center">
        <UndoIcon />
      </TableCell>
    </>
  );
};

export default AlbumRowFrom;
