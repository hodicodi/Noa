import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleSongRow from "../../../components/handle-song-row/HandleSongRow.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import TableHeader from "../../../components/table-header/TableHeader.tsx";
import { useSongFilterQuery } from "../../../hooks/useSongFilterQuery.ts";
import { NEW_SONG_DEFAULT_VALUES, COLUMN_NAMES } from "./handleSongsPage.consts.ts";
import Styles from "./handleSongsPage.styles.ts";

const HandleSongsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredSongs = [] } = useSongFilterQuery(searchQuery);
  const [currentSongs, setCurrentSongs] = useState(filteredSongs);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const setExistingSongs = () => {
    setCurrentSongs(currentSongs.filter((song) => song.uuid));
  };

  const handleAddRow = () => {
    setExistingSongs();
    setCurrentSongs((currentSongs) => [NEW_SONG_DEFAULT_VALUES, ...currentSongs!]);
  };

  useEffect(() => {
    setCurrentSongs(filteredSongs!);
  }, [filteredSongs]);

  return (
    <>
      <NavBar />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Songs
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or genre or album..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <TableHeader handleAddRow={handleAddRow} columnNames={COLUMN_NAMES} />
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
