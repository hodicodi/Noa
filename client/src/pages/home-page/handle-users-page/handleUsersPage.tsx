import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
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
import { useUserFilterQuery } from "../../../hooks/useUserFilterQuery.ts";
import newUser from "./handleUserPage.consts.ts";
import Styles from "./handleUsersPage.styles.ts";
import SearchBar from "../../../components/search-bar/SearchBar.tsx"

const HandleUsersPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: filteredUsers } = useUserFilterQuery(searchQuery);
  const [currentUsers, setCurrentUsers] = useState(filteredUsers);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  const handleAddRow = () => {
    setCurrentUsers((currentUsers) => [newUser, ...currentUsers!]);
  };

  useEffect(() => {
    setCurrentUsers(filteredUsers!);
  }, [filteredUsers]);

  return (
    <>
      <NavBar />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Users
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or id..."/>

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={Styles.tableCell}>User name</TableCell>
                  <TableCell sx={Styles.tableCell} align="center">
                    Id
                  </TableCell>
                  <TableCell sx={Styles.tableCell} align="center">
                    Is administor
                  </TableCell>
                  <TableCell sx={Styles.tableCell} align="center">
                    <AddIcon onClick={handleAddRow} />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentUsers?.map((user) => (
                  <HandleUserRow key={user.uuid} user={user} edit={!user?.uuid} />
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
