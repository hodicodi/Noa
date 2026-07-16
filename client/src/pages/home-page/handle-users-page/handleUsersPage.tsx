import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import { useUsers } from "../../../hooks/useUser.ts";
import Path from "../../../routes/path.constants.ts";
import Styles from "./handleUsersPage.styles.ts";
import SaveIcon from "@mui/icons-material/Save";
import HandleUserRow from "../../../components/handle-user-row/HandleUserRow.tsx";

const HandleUsersPage: FC = () => {
  const { data: users = [] } = useUsers();

  const [searchQuery, setSearchQuery] = useState<string>("");


  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users!.filter((user) => {
    const query = searchQuery.toLowerCase();
    return user.name.toLowerCase().includes(query) || user.tz.toLowerCase().includes(query);
  });

  const navigate = useNavigate();




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
                  <TableCell sx={Styles.tableCell} align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers?.map((user) => (
                  <HandleUserRow user={user} />
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
