"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b303a", // dark
    },
    secondary: {
      main: "#414116ff", // ubah menjadi ungu
    },
    background: {
      default: "#edebed", // light
      paper: "#c7c7b2", // beige
    },
    text: {
      primary: "#2b303a",
      secondary: "#75756a",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
