import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: deepOrange
    }
});

export default theme;