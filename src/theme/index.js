import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
    }
  },
});

export default theme;