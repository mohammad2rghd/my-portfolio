import { createTheme } from "@mui/material/styles";

//Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "vazir , roboto",
    button: {
      fontFamily: "tahoma",
    },
  },
});
