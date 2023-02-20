import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1250,
      xl: 1536,
    },
  },
  typography: {
    footerTitle: {
      fontSize: 25,
      fontFamily: "Poppins",
      fontWeight: 600,
      color: "#2A2521",
    },
    footerContent: {
      fontSize: 25,
      fontFamily: "Poppins",
      fontWeight: 300,
      lineHeight: "55px",
      color: "#2A2521",
    },
    titleH2: {
      fontFamily: "Koh Santepheap",
      fontSize: "40px",
      "@media (min-width:900px)": {
        fontSize: "50px",
      },
      lineHeight: "75px",
      fontWeight: 500,
      color: "#2A2521",
    },
    textContent: {
      fontFamily: "Poppins",
      fontSize: "25px",
      fontWeight: 300,
      color: "#2A2521",
    },
    textYellow: {
      fontFamily: "Lato",
      fontSize: "40px",
      fontWeight: 400,
      color: "#FF8F1E",
    },
  },
});

export default theme;
