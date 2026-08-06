import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleAlbumRow from "../../../components/handle-album-row/HandleAlbumRow.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import TableHeader from "../../../components/table-header/TableHeader.tsx";
import { useAlbumFilterQuery } from "../../../hooks/useAlbumsFilterQuery.ts";
import { ADMINISTOR_PATH } from "../../../routes/path.constants.ts";
import {NEW_ALBUM_DEFAULT_VALUES, COLUMN_NAMES} from "./handleAlbumsPage.consts.ts";
import Styles from "./handleAlbumsPage.styles.ts";

const HandleAlbumsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredAlbums = [] } = useAlbumFilterQuery(searchQuery);
  const [currentAlbums, setCurrentAlbums] = useState(filteredAlbums);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ADMINISTOR_PATH);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const setExistingAlbums = () => {
    setCurrentAlbums(currentAlbums!.filter((album) => album.uuid));
  };

  const handleAddRow = () => {
    setExistingAlbums();
    setCurrentAlbums((currentAlbums) => [NEW_ALBUM_DEFAULT_VALUES, ...currentAlbums!]);
  };

  useEffect(() => {
    setCurrentAlbums(filteredAlbums!);
  }, [filteredAlbums]);

  return (
    <>
      <NavBar />
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Albums
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or artist name..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <TableHeader handleAddRow={handleAddRow} columnNames={COLUMN_NAMES} />
              <TableBody>
                {currentAlbums?.map((album, index) => (
                  <HandleAlbumRow
                    key={album.uuid ?? index}
                    album={album}
                    isEditable={!album?.uuid}
                    setCurrentAlbums={setCurrentAlbums}
                    currentAlbums={currentAlbums}
                    setExistingAlbums={setExistingAlbums}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default HandleAlbumsPage;
