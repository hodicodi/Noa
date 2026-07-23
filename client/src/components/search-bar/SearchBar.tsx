import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import Styles from "./searchBar.styles.ts";
import { SearchBarProps } from "./searchBar.type.ts";

const SearchBar: FC<SearchBarProps> = ({ searchQuery, handleSearchChange }) => (
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Search by name or id..."
    value={searchQuery}
    onChange={handleSearchChange}
    sx={Styles.searchBarInputField}
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
);

export default SearchBar;
