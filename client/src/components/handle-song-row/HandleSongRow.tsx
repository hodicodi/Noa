import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { SongRegistrationSchema, SongRegistrationInput } from "@shared/src/schemas/songValidation.schema.ts";
import { AlbumRegistrationInput, AlbumRegistrationSchema } from "@shared/src/schemas/albumValidation.schema.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AlbumRowFrom from "../album-row-form/AlbumRowForm.tsx";
import AlbumRowPreview from "../album-row-preview/AlbumRowPreview.tsx";
import Styles from "./handleSongRow.styles.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { SongType } from "@shared/src/enums/songType.enum.ts";

type HandleSongRowProps = {
  song: Song;
  isEditable: boolean;
  setCurrentSongs: (songs: Song[]) => void;
  currentSongs: Song[];
  setExistingSongs: () => void;
};

const HandleSongRow: FC<HandleSongRowProps> = ({ song, isEditable, setCurrentSongs, currentSongs, setExistingSongs }) => {
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
    <TableRow key={song.uuid} sx={Styles.TableRow}>
      {isEditMode ? (
        <FormProvider {...formMethods}>
          <AlbumRowFrom
            onSaveAlbumSuccess={toggleEditMode}
            song={song}
            setiIsEditMode={setIsEditMode}
            setCurrentSongs={setCurrentSongs}
            currentSongs={currentSongs}
            setExistingSongs={setExistingSongs}
          />
        </FormProvider>
      ) : (
        <AlbumRowPreview song={song} toggleEditMode={toggleEditMode} />
      )}
    </TableRow>
  );
};

export default HandleSongRow;
