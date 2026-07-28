import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { UserRegistrationInput, UserRegistrationSchema } from "@shared/src/schemas/userValidation.schema.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AlbumRowFrom from "../album-row-form/AlbumRowForm.tsx";
import AlbumRowPreview from "../album-row-preview/AlbumRowPreview.tsx";
import Styles from "./handleAlbumRow.styles.ts";
import { AlbumRegistrationInput, AlbumRegistrationSchema } from "@shared/src/schemas/albumValidation.schema.ts";

type handleAlbumRowProps = {
  album: Album;
  edit: boolean;
  setCurrentAlbums: (albums: Album[]) => void;
  currentAlbums: Album[];
};

const HandleAlbumRow: FC<handleAlbumRowProps> = ({ album, edit, setCurrentAlbums, currentAlbums }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(edit);
  const toggleEditMode = (): void => setIsEditMode((prev) => !prev);

  const formMethods = useForm<AlbumRegistrationInput>({
    resolver: zodResolver(AlbumRegistrationSchema),
    defaultValues: { name: "", artist: {} },
  });

  useEffect(() => {
    formMethods.reset(album);
  }, [album]);

  return (
    <TableRow key={album.uuid} sx={Styles.TableRow}>
      <FormProvider {...formMethods}>
        {isEditMode ? (
          <AlbumRowFrom
            onSaveAlbumSucsses={toggleEditMode}
            album={album}
            setiIsEditMode={setIsEditMode}
            setCurrentAlbums={setCurrentAlbums}
            currentAlbums={currentAlbums}
          />
        ) : (
          <AlbumRowPreview album={album} toggleEditMode={toggleEditMode} />
        )}
      </FormProvider>
    </TableRow>
  );
};

export default HandleAlbumRow;
