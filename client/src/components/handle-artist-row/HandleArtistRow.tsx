import { zodResolver } from "@hookform/resolvers/zod";
import TableRow from "@mui/material/TableRow";
import { AlbumRegistrationInput, AlbumRegistrationSchema } from "@shared/src/schemas/albumValidation.schema.ts";
import { Album } from "@shared/src/types/album.types.ts";
import { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AlbumRowFrom from "../album-row-form/AlbumRowForm.tsx";
import AlbumRowPreview from "../album-row-preview/AlbumRowPreview.tsx";
import Styles from "./handleArtistRow.styles.ts";
import { Artist } from "@shared/src/types/artist.type.ts";
import { ArtistRegistrationInput, ArtistRegistrationSchema } from "@shared/src/schemas/artistValidation.schema.ts";

type HandleArtistRowProps = {
  artist: Artist;
  isEditable: boolean;
  setCurrentArtists: (artists: Artist[]) => void;
  currentArtists: Artist[];
  setExistingArtists: () => void;
};

const HandleArtistRow: FC<HandleArtistRowProps> = ({ artist, isEditable, setCurrentArtists, currentArtists, setExistingArtists }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(isEditable);
  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  const formMethods = useForm<ArtistRegistrationInput>({
    resolver: zodResolver(ArtistRegistrationSchema),
    defaultValues: { name: "" },
  });

  useEffect(() => {
    formMethods.reset(artist);
  }, [artist]);

  return (
    <TableRow key={artist.uuid} sx={Styles.TableRow}>
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
