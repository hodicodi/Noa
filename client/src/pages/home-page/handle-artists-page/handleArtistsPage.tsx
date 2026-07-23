import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleUserRow from "../../../components/handle-user-row/HandleUserRow.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import { useArtistsFilterQuery } from "../../../hooks/useArtistsFilterQuery.ts";
import newArtist from "./handleArtistsPage.consts.ts";
import Styles from "./handleArtistsPage.styles.ts";

const HandleArtistsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: filteredArtists } = useArtistsFilterQuery(searchQuery);
  const [currentArtists, setCurrentArtists] = useState(filteredArtists);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRow = () => {
    setCurrentArtists((currentArtists) => [newArtist, ...currentArtists!]);
  };

  useEffect(() => {
    setCurrentArtists(filteredArtists!);
  }, [filteredArtists]);

  return (
    <>
      <NavBar />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Artists
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or genre" />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={Styles.tableCell}>name</TableCell>
                  <TableCell sx={Styles.tableCell} align="center">
                    type
                  </TableCell>
                  <TableCell sx={Styles.tableCell} align="center">
                    <AddIcon onClick={handleAddRow} />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentArtists?.map((artist) => (
                  <HandleUserRow key={artist.uuid} artist={artist} edit={artist.uuid ? false : true} />
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
