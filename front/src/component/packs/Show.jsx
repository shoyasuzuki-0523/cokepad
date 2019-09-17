import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {user: {}},
      date: ''
    };
    axios
    .get(`http://192.168.99.100:3001/posts/${this.props.match.params.id}`)
    .then((results) => {
      console.log(results);
      var t = new Date(results.data.created_at);
      var year  = t.getFullYear();
      var month = t.getMonth() + 1;
      var day   = t.getDate();
      var date = year + "/" + month + "/" + day
      console.log(results.data.user.id)
      this.setState({post: results.data, date: date});
    })
    .catch((data) =>{
      console.log(data);
    });
  }

  deletePost = () => {
    return this.props.deletePost(this.props.match.params.id)
  }

  editPost = () => {
    this.props.history.push(`/posts/${this.props.match.params.id}/update`);
  }

  editButton = (postUserId, currentUserId) => {
    if(currentUserId === postUserId){
      return(
        <Grid item>
          <Button onClick={this.editPost}>
            Edit
          </Button>
          <Button onClick={this.deletePost}>
            Delete
          </Button>
        </Grid>
      );
    }else{
      return(
        <Grid item/>
      );
    }
  }

  render(){
    const classes = makeStyles({
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });

    return(
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" component="h2">
            {this.state.post.title}
          </Typography>
        </CardContent>

        <CardActions>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6" component="h6">
                {this.state.post.user.name}
              </Typography>
            </Grid>
            {this.editButton(this.state.post.user.id, this.props.currentUser.id)}
          </Grid>
        </CardActions>

        <hr/>

        <CardContent>
          <Typography color="textSecondary" >
            {this.state.date}
          </Typography>
          <Typography variant="h6" component="p">
            {this.state.post.content}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(Show);