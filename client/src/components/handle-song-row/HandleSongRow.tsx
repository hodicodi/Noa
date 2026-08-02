import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { SongType } from "@shared/src/enums/songType.enum.ts";
import { SongRegistrationInput, SongRegistrationSchema } from "@shared/src/schemas/songValidation.schema.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SongRowFrom from "../song-row-form/SongRowForm.tsx";
import SongRowPreview from "../song-row-preview/SongRowPreview.tsx";
import Styles from "./handleSongRow.styles.ts";

type HandleSongRowProps = {
  song: Song;
  isEditable: boolean;
  setCurrentSongs: (songs: Song[]) => void;
  setExistingSongs: () => void;
};

const HandleSongRow: FC<HandleSongRowProps> = ({ song, isEditable, setCurrentSongs, setExistingSongs }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(isEditable);
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);

  const formMethods = useForm<SongRegistrationInput>({
    resolver: zodResolver(SongRegistrationSchema),
    defaultValues: { name: "", genre: SongType.Rock, album: {} },
  });

  useEffect(() => {
    formMethods.reset(song);
  }, [song]);

    return (
      <TableRow sx={Styles.TableRow}>
        {isEditMode ? (
          <FormProvider {...formMethods}>
            <SongRowFrom
              onSaveSongSuccess={toggleEditMode}
              song={song}
              setiIsEditMode={setIsEditMode}
              setCurrentSongs={setCurrentSongs}
              setExistingSongs={setExistingSongs}
            />
          </FormProvider>
        ) : (
          <SongRowPreview song={song} toggleEditMode={toggleEditMode} />
        )}
      </TableRow>
    );
};

export default HandleSongRow;
