import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { FC } from "react";
import { Box, CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Styles from "./app.Styles.ts";
const theme = createTheme({ palette: { primary: { main: "#ffffff" } }, typography: { fontFamily: "Georgia" } });

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={Styles.app}>
        <Box sx={Styles.backgound}>
          <RouterProvider router={router} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
