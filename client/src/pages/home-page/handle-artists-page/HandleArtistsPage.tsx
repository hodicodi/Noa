import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleAlbumRow from "../../../components/handle-album-row/HandleAlbumRow.tsx";
import HandleAlbumsTableHead from "../../../components/handle-albums-table-head/HandleAlbumsTableHead.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import { useArtistFilterQuery } from "../../../hooks/useArtistsFilterQuery.ts";
import { ADMINISTOR_PATH } from "../../../routes/path.constants.ts";
import Styles from "./handleArtistsPage.styles.ts";
import { newArtist } from "../handle-albums-page/handleAlbumsPage.consts.ts";

const HandleArtistsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredArtists = [] } = useArtistFilterQuery(searchQuery);
  const [currentArtists, setCurrentArtists] = useState(filteredArtists);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ADMINISTOR_PATH);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const setExistingArtists = () => {
    setCurrentArtists(currentArtists!.filter((artist) => artist.uuid));
  };

  const handleAddRow = () => {
    setExistingArtists();
    setCurrentArtists((currentArtists) => [newArtist, ...currentArtists!]);
  };

  useEffect(() => {
    setCurrentArtists(filteredArtists!);
  }, [filteredArtists]);

  return (
    <>
      <NavBar />
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Artists
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <HandleAlbumsTableHead handleAddRow={handleAddRow} />
              <TableBody>
                {currentArtists?.map((artist, index) => (
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

export default HandleArtistsPage;
