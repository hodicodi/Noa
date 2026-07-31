import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { AlbumRegistrationInput, AlbumRegistrationSchema } from "@shared/src/schemas/albumValidation.schema.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AlbumRowFrom from "../album-row-form/AlbumRowForm.tsx";
import AlbumRowPreview from "../album-row-preview/AlbumRowPreview.tsx";
import Styles from "./handleAlbumRow.styles.ts";

type HandleAlbumRowProps = {
  album: Album;
  isEditable: boolean;
  setCurrentAlbums: (albums: Album[]) => void;
  currentAlbums: Album[];
  setExistingAlbums: () => void;
};

const HandleAlbumRow: FC<HandleAlbumRowProps> = ({ album, isEditable, setCurrentAlbums, currentAlbums, setExistingAlbums }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(isEditable);
  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  const formMethods = useForm<AlbumRegistrationInput>({
    resolver: zodResolver(AlbumRegistrationSchema),
    defaultValues: { name: "", artist: {} },
  });

  useEffect(() => {
    formMethods.reset(album);
  }, [album]);

  return (
    <TableRow key={album.uuid} sx={Styles.TableRow}>
      {isEditMode ? (
        <FormProvider {...formMethods}>
          <AlbumRowFrom
            onSaveAlbumSuccess={toggleEditMode}
            album={album}
            setiIsEditMode={setIsEditMode}
            setCurrentAlbums={setCurrentAlbums}
            currentAlbums={currentAlbums}
            setExistingAlbums={setExistingAlbums}
          />
        </FormProvider>
      ) : (
        <AlbumRowPreview album={album} toggleEditMode={toggleEditMode} />
      )}
    </TableRow>
  );
};

export default HandleAlbumRow;
