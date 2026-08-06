import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { ChangeEvent, FC, useEffect, useState } from "react";
import HandleUserRow from "../../../components/handle-user-row/HandleUserRow.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import SearchBar from "../../../components/search-bar/SearchBar.tsx";
import TableHeader from "../../../components/table-header/TableHeader.tsx";
import { useUserFilterQuery } from "../../../hooks/useUserFilterQuery.ts";
import { NEW_USER_DEFULT_VALUES, COLUMN_NAMES } from "./handleUserPage.consts.ts";
import Styles from "./handleUsersPage.styles.ts";
import { useNavigate } from "react-router-dom";
import { ADMINISTOR_PATH } from "../../../routes/path.constants.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HandleUsersPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: filteredUsers = [] } = useUserFilterQuery(searchQuery);
  const [currentUsers, setCurrentUsers] = useState(filteredUsers);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ADMINISTOR_PATH);
  };


  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const setExistingUser = () => {
    setCurrentUsers(currentUsers!.filter((user) => user.uuid));
  };

  const handleAddRow = () => {
    setExistingUser();
    setCurrentUsers((currentUsers) => [NEW_USER_DEFULT_VALUES, ...currentUsers!]);
  };

  useEffect(() => {
    setCurrentUsers(filteredUsers!);
  }, [filteredUsers]);

  return (
    <>
      <NavBar />
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.handleUsersPage}>
        <Typography variant="h3" sx={Styles.title}>
          Users
        </Typography>

        <Box sx={Styles.searchableTable}>
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeHolder="Search by name or id..." />

          <TableContainer sx={Styles.table} component={Paper}>
            <Table>
              <TableHeader handleAddRow={handleAddRow} columnNames={COLUMN_NAMES}/>
              <TableBody>
                {currentUsers?.map((user) => (
                  <HandleUserRow
                    key={user.uuid}
                    user={user}
                    edit={!user?.uuid}
                    setCurrentUsers={setCurrentUsers}
                    currentUsers={currentUsers}
                    setExistingUser={setExistingUser}
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

export default HandleUsersPage;
