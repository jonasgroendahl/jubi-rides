import { createMuiTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff"
    }
  }
});
