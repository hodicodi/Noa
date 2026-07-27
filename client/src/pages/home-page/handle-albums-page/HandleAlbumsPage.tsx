import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleUserRow from "../../../components/handle-user-row/HandleUserRow.tsx";
import HandleUsersTableHead from "../../../components/handle-users-table-head/HandleUsersTableHead.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import { useUserFilterQuery } from "../../../hooks/useUserFilterQuery.ts";
// import newUser from "./handleUserPage.consts.ts";
import Styles from "./handleAlbumsPage.styles.ts";
import { useAlbumFilterQuery } from "../../../hooks/useAlbumsFilterQuery.ts";
import newAlbum from "./handleAlbumsPage.consts.ts";

const HandleAlbumsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredAlbums = [] } = useAlbumFilterQuery(searchQuery);
  const [currentAlbums, setCurrentAlbums] = useState(filteredAlbums);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRow = () => {
    setCurrentAlbums((currentAlbums) => [newAlbum, ...currentAlbums!]);
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
              <HandleUsersTableHead handleAddRow={handleAddRow} />
              <TableBody>
                {currentAlbums?.map((album) => (
                  <HandleUserRow key={album.uuid} album={album} edit={!album?.uuid} setCurrentAlbums={setCurrentAlbums} currentAlbums={currentAlbums} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default HandleUsersPage;
