import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import About from './About'
import Home from './Home'

const drawerWidth = 240

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  cpHome = () => {
    this.props.history.push('/')
  }

  cpAbout = () => {
    this.props.history.push('/About')
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar} />
          <List>
            <ListItem button onClick={this.cpHome}>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button onClick={this.cpAbout}>
              <ListItemText primary={'About'} />
            </ListItem>
          </List>
        </Drawer>
        <main className={this.props.classes.content}>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/About' render={ () => <About name='shoya' /> }/>
          </div>
        </main>
      </div>
    )
  }
}

const AppWithStylesAndRouter = withStyles(styles)(withRouter(App))

render(
  <Router>
    <AppWithStylesAndRouter />
  </Router>,
  document.getElementById('app')
);