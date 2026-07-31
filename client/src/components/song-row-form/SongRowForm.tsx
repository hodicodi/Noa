import SaveIcon from "@mui/icons-material/Save";
import UndoIcon from "@mui/icons-material/Undo";
import { Autocomplete, Button, TableCell, TextField } from "@mui/material";
import { SongRegistrationInput } from "@shared/src/schemas/songValidation.schema.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useAllAlbums } from "../../hooks/useAllAlbums.ts";
import { useSaveSong } from "../../hooks/useSaveSong.ts";
import { useSaveSongMp3 } from "../../hooks/useSaveSongMp3.ts";
import Styles from "../handle-album-row/handleAlbumRow.styles.ts";

type SongRowFormProps = {
  onSaveSongSuccess: () => void;
  song: Song;
  setiIsEditMode: (isEditMode: boolean) => void;
  setCurrentSongs: (songs: Song[]) => void;
  currentSongs: Song[];
  setExistingSongs: () => void;
};

const SongRowFrom: FC<SongRowFormProps> = ({ onSaveSongSuccess, song, setiIsEditMode, setCurrentSongs, currentSongs, setExistingSongs }) => {
  const { control, handleSubmit, reset } = useFormContext<SongRegistrationInput>();
  const { mutate: saveSong } = useSaveSong(onSaveSongSuccess);
  const { mutate: saveSongMp3 } = useSaveSongMp3();
  const { data: albums = [] } = useAllAlbums();

  const onSubmit = (formData: SongRegistrationInput) => {
    const { mp3File, ...filteredData } = formData;
    const uploadmp3Data = new FormData();
    uploadmp3Data.append("mp3File", mp3File);
    uploadmp3Data.append("title", filteredData.name);
    saveSongMp3(uploadmp3Data);
    saveSong(filteredData);
  };

  const handleUndo = () => {
    if (song.uuid) {
      setiIsEditMode(false);
      reset(song);
    } else {
      setExistingSongs();
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
          name="album"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={albums}
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

export default SongRowFrom;
