import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import { Autocomplete, Button, TableCell, TextField } from "@mui/material";
import { AlbumRegistrationInput } from "@shared/src/schemas/albumValidation.schema.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useAllArtists } from "../../hooks/useArtists.tsx";
import { useSaveAlbum } from "../../hooks/useSaveAlbum.ts";
import Styles from "../handle-album-row/handleAlbumRow.styles.ts";
import { useSaveAlbumImg } from "../../hooks/useSaveAlbumImg.ts";

type AlbumRowFormProps = {
  onSaveAlbumSuccess: () => void;
  album: Album;
  setiIsEditMode: (isEditMode: boolean) => void;
  setCurrentAlbums: (albums: Album[]) => void;
  currentAlbums: Album[];
  setExistingAlbums: () => void;
};

const AlbumRowFrom: FC<AlbumRowFormProps> = ({ onSaveAlbumSuccess, album, setiIsEditMode, setCurrentAlbums, currentAlbums, setExistingAlbums }) => {
  const { control, handleSubmit, reset } = useFormContext<AlbumRegistrationInput>();
  const { mutate: saveAlbum } = useSaveAlbum(onSaveAlbumSuccess);
  const { mutate: saveAlbumImg } = useSaveAlbumImg();
  const { data: artists = [] } = useAllArtists();

  const onSubmit = (formData: AlbumRegistrationInput) => {
    const { imgFile, ...filteredData } = formData;
    const uploadImgData = new FormData();
    uploadImgData.append("imgFile", imgFile);
    uploadImgData.append("title", filteredData.name);
    saveAlbumImg(uploadImgData);
    saveAlbum(filteredData);
  };

  const handleUndo = () => {
    if (album.uuid) {
      setiIsEditMode(false);
      reset(album);
    } else {
      setExistingAlbums();
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
          name="artist"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={artists}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.uuid === value?.uuid}
              value={field.value ?? null}
              onChange={(_, newValue) => field.onChange(newValue)}
              clearOnEscape
              sx={Styles.autoComplete}
              renderInput={(params) => <TextField {...params} variant="standard" sx={Styles.autoCompleteTextField} />}
            />
          )}
        />
      </TableCell>
      <TableCell sx={Styles.tableCell} align="center">
        <Controller
          name="imgFile"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <Button variant="outlined" component="label" size="small">
              {value?.name ? value.name : "Upload"}
              <input
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                {...field}
              />
            </Button>
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
