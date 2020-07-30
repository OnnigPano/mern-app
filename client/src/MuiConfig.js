import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: '#2196f3'
        } 
    }
});

export default theme;