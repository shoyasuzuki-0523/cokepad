import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import List from '../component/List';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 0,
      user: {
        posts: [],
        goods: []
      },
      avatar: ''
    };
  }

  componentDidMount(){
    axios.get(`http://192.168.99.100:3001/users/${this.props.id}`)
    .then((results) => {
      console.log(results)
      this.setState({user: results.data})
    })
    .catch((data) =>{
      console.log(data)
    });
  }

  handleChange = (event, newValue) => {
    this.setState({tab: newValue});
  };

  render(){
    return(
      <Paper>
        <Box px={2} py={1}>
          <Grid container justify="flex-start">
            <Grid item>
              <Box mr={1}>
                <Avatar src={this.state.user.avatar_url}/>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h4">
                {this.state.user.name}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item align="center">
            <Typography component="p">
              投稿
            </Typography>
            <Typography variant='h6'>
              {Object.keys(this.state.user.posts).length}
            </Typography>
          </Grid>
          <Grid item align="center">
            <Typography component="p">
              いいね！
            </Typography>
            <Typography variant='h6'>
            {Object.keys(this.state.user.goods).length}
            </Typography>
          </Grid>
          <Grid item align="center">
            <Typography component="p">
              コメント
            </Typography>
            <Typography variant='h6'>
              ?
            </Typography>
          </Grid>
        </Grid>
        <AppBar position="static" color="#fff" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Tabs
            value={this.state.tab}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="prymary"
            variant="fullWidth"
          >
            <Tab label="投稿"/>
            <Tab label="いいね！"/>
            <Tab label="コメント"/>
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.tab} index={0}>
          <List posts={this.state.user.posts} />
        </TabPanel>
        <TabPanel value={this.state.tab} index={1}>
          <List posts={this.state.user.goods}/>
        </TabPanel>
        <TabPanel value={this.state.tab} index={2}>
          ここはコメント一覧です。<br />
          あなたが投稿したコメントが表示されます。
        </TabPanel>
      </Paper>
    );
  }
}

export default withRouter(Profile);