import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleAlbumRow from "../../../components/handle-album-row/HandleAlbumRow.tsx";
import HandleAlbumsTableHead from "../../../components/handle-albums-table-head/HandleAlbumsTableHead.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import { useAlbumFilterQuery } from "../../../hooks/useAlbumsFilterQuery.ts";
import Styles from "./handleAlbumsPage.styles.ts";
import NEW_ALBUM_DEFAULT_VALUES from "./handleAlbumsPage.consts.ts";

const HandleAlbumsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredAlbums = [] } = useAlbumFilterQuery(searchQuery);
  const [currentAlbums, setCurrentAlbums] = useState(filteredAlbums);

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
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Albums
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or id..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <HandleAlbumsTableHead handleAddRow={handleAddRow} />
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
