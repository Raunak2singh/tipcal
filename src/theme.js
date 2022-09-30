import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

//  font =  
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },

  },
  typography:{
    fontSize : 20,
    fontFamily : "'Space Mono', monospace",
  }

  

});

export default theme;