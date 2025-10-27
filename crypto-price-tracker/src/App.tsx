import React, { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {  useThemeContext } from './context/ThemeContext';
import Home from "./components/pages/Home";

const App: React.FC = () => {
   const { darkMode } = useThemeContext();
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: darkMode ? "dark" : "light",
            primary: { main: "#4caf50" },
          },
        }),
      [darkMode]
    );
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>

  );
};

export default App;
