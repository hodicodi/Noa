import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleSongRow from "../../../components/handle-song-row/HandleSongRow.tsx";
import HandleSongsTableHead from "../../../components/handle-songs-table-head/HandleSongsTableHead.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import { useSongFilterQuery } from "../../../hooks/useSongFilterQuery.ts";
import newSong from "./handleSongsPage.consts.ts";
import Styles from "./handleSongsPage.styles.ts";
import { useNavigate } from "react-router-dom";
import { ADMINISTOR_PATH } from "../../../routes/path.constants.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HandleSongsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredSongs = [] } = useSongFilterQuery(searchQuery);
  const [currentSongs, setCurrentSongs] = useState(filteredSongs);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ADMINISTOR_PATH);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const setExistingSongs = () => {
    setCurrentSongs(currentSongs!.filter((song) => song.uuid));
  };

  const handleAddRow = () => {
    setExistingSongs();
    setCurrentSongs((currentSongs) => [newSong, ...currentSongs!]);
  };

  useEffect(() => {
    setCurrentSongs(filteredSongs!);
  }, [filteredSongs]);

  return (
    <>
      <NavBar />
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Songs
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or genre..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <HandleSongsTableHead handleAddRow={handleAddRow} />
              <TableBody>
                {currentSongs?.map((song, index) => (
                  <HandleSongRow
                    key={song.uuid ?? index}
                    song={song}
                    isEditable={!song?.uuid}
                    setCurrentSongs={setCurrentSongs}
                    currentSongs={currentSongs}
                    setExistingSongs={setExistingSongs}
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

export default HandleSongsPage;
