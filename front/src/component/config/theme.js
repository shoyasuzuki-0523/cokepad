import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: red,
    secondary: yellow,
  },
});