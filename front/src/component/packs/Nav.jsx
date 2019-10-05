import React from 'react';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IndexBtn from '../component/IndexBtn';
import FormBtn from '../component/FormBtn';
import SignInBtn from '../component/SignInBtn';
import SignUpBtn from '../component/SignUpBtn';
import ProfileBtn from '../component/ProfileBtn';
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
      <FormBtn>
        <Button variant="contained" color="secondary">
          投稿する
        </Button>
      </FormBtn>
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

const drawerButton = (props) => {
  if(props.sign){
    return(
      <div>
        <Divider />
        <ProfileBtn id={props.currentUser.id}> 
          <ListItem button>
            <Box component="span" mr={1}>
              <PersonIcon/>
            </Box>
            <ListItemText primary={'プロフィール'} />
          </ListItem>
        </ProfileBtn>
        <ListItem button onClick={props.signOut}>
          <Box component="span" mr={1}>
            <ExitToAppIcon/>
          </Box>
          <ListItemText primary={'ログアウト'}/>
        </ListItem>
      </div>
    );
  }
}

export default withRouter(function ClippedDrawer(props) {
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
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <IndexBtn>
              <ListItem button>
                <Box component="span" mr={1}>
                  <HomeIcon/>
                </Box>
                <ListItemText primary={'ホーム'} />
              </ListItem>
            </IndexBtn>
            {drawerButton(props)}
          </List>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <MainContainer token={props.token} currentUser={props.currentUser}/>
      </main>
    </div>
  );
})