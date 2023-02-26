import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: red[500],
    },
  },
})

export default theme;
