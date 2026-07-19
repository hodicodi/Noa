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
import { User } from "@shared/src/types/user.type.ts";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleUserRow from "../../../components/handle-user-row/HandleUserRow.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import { useUsers } from "../../../hooks/useUser.ts";
import Styles from "./handleUsersPage.styles.ts";

const HandleUsersPage: FC = () => {
  const { data: users = [] } = useUsers();
  const [currentUsers, setCurrentUsers] = useState(users ?? []);
  console.log("////");
  currentUsers.map((user) => console.log("uuid: " + user.uuid));

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = currentUsers!.filter((user) => {
    const query = searchQuery.toLowerCase();
    return user.name.toLowerCase().includes(query) || user.tz.toLowerCase().includes(query);
  });

  const handleAddRow = () => {
    const newUser: User = {
      isAdministor: false,
      name: "",
      tz: "",
      uuid: "",
      createDate: new Date(),
      deleteDate: null,
    };

    setCurrentUsers((currentUsers) => [newUser, ...currentUsers!]);
  };

  useEffect(() => {
    setCurrentUsers(users!);
  }, [users]);

  return (
    <>
      <NavBar />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={{ color: "#f8f8f8" }}>
          Users
        </Typography>

        <Box sx={Styles.searchableTable}>
          {/* Search Input Bar */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name or id..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ marginBottom: 3, backgroundColor: "#fff" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              },
            }}
          />

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
                {filteredUsers?.map((user) => (
                  <HandleUserRow key= {user.uuid} user={user} edit={user.uuid === ""} />
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
