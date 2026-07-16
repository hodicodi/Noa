import { SxProps } from "@mui/material";

const checkbox: SxProps = {
    color: '#f7f7f7', // Color when unchecked
    '&.Mui-checked': {
      color: '#ffffff', // Color when checked
    },
}

const handleUsersPage: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  mt: 4,
  minHeight: "100%",
  alignItems: "center",
  
};

const tableCell: SxProps = {
  color: "#fffefe",
  width:'1%'
}

const textField: SxProps = {
     input: { color: 'white' },
        '& .MuiInput-underline:before': { borderBottomColor: 'rgba(253, 253, 253, 0.42)' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
        '& .MuiInput-underline:after': { borderBottomColor: 'white' }
}


export default {checkbox, tableCell, textField};