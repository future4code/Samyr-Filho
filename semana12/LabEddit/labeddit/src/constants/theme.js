import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secudaryColor } from './colors';

const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: 'white'
      },
      secondary: {
        main:  secudaryColor,
        contrastText: 'white',
      },
      text: {
        primary: secudaryColor
      }
    }
  });

  export default theme