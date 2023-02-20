import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
  },
});

export default theme;
