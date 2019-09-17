import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeBtn from '../component/HomeBtn';
import AboutBtn from '../component/AboutBtn';
import IndexBtn from '../component/IndexBtn';
import FormBtn from '../component/FormBtn';
import SignInBtn from '../component/SignInBtn';
import SignUpBtn from '../component/SignUpBtn';
import MainContainer from '../component/MainContainer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
}));

const signSplit = (props) => {
  if(props.sign){
    return(
      <Grid container>
        <Grid item>
          <FormBtn>
            <Button color="inherit">
              <Typography  fontWeight="fontWeightBold">
                投稿する
              </Typography>
            </Button>
          </FormBtn>
        </Grid>
        <Grid item>
          <Button color="inherit" onClick={props.signOut}>
            ログアウト
          </Button>
        </Grid>
      </Grid>
    );
  }else{
    return(
      <Grid container>
        <Grid item>
          <SignInBtn>
            <Button color="inherit">
              <Typography fontWeight="fontWeightBold">
                ログイン
              </Typography>
            </Button>
          </SignInBtn>
        </Grid>
        <Grid item>
          <SignUpBtn>
            <Button color="inherit">
              <Typography fontWeight="fontWeightBold">
                新規登録
              </Typography>
            </Button>
          </SignUpBtn>
        </Grid>
      </Grid>
    );
  }
}

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5" noWrap>
                Cokepad
              </Typography>
            </Grid>
            <Grid item>
              {signSplit(props)}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden mdDown>
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
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <MainContainer token={props.token} currentUser={props.currentUser}/>
      </main>
    </div>
  );
}