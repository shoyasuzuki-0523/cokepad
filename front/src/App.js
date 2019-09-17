import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './component/config/theme';
import AppContainer from'./component/packs/AppContainer';

function App() {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme} >
          <CssBaseline/>
          <Router>
            <AppContainer />
          </Router>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
