import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid';
import { theme } from '../config/theme';
import HomeBtn from '../component/HomeBtn';
import AboutBtn from '../component/AboutBtn';
import IndexBtn from '../component/IndexBtn';
import About from './About';
import Home from './Home';
import Index from './Index';
import Show from './Show';

class AppContent extends Component {
  render() {
    const classes = makeStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      toolbar: theme.mixins.toolbar,
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar color="primary" position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              SampleApp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <HomeBtn>
              <ListItem button>
                <ListItemText primary={'Home'} />
              </ListItem>
            </HomeBtn>
            <AboutBtn>
              <ListItem button>
                <ListItemText primary={'About'} />
              </ListItem>
            </AboutBtn>
            <IndexBtn>
              <ListItem button>
                <ListItemText primary={'Index'} />
              </ListItem>
            </IndexBtn>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            <Grid container>
              <Grid item xs />
              <Grid item xs={11}>
                <Route exact path='/' component={Home}/>
                <Route exact path="/posts/:id/show" component={Show}/>
                <Route path='/About' render={ () => <About name='to----ya' /> }/>
                <Route path='/Index' component={Index}/>
              </Grid>
              <Grid item xs />
            </Grid>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(AppContent);
