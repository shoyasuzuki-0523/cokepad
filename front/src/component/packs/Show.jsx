import React, { Component } from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentForm from '../component/CommentForm';
// import Comment from '../component/Comment';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {
        user: {},
        goods: {},
        comments: {}
      },
      goodCount: 0,
      btnState: false,
      date: '',
    };
    this.goodOn = this.goodOn.bind(this);
    this.goodOff = this.goodOff.bind(this);
  }

  componentDidMount(){
    axios
    .get(`http://192.168.99.100:3001/posts/${this.props.match.params.id}`)
    .then((results) => {
      console.log(results);

      var t = new Date(results.data.created_at);
      var year  = t.getFullYear();
      var month = t.getMonth() + 1;
      var day   = t.getDate();
      var date = year + "/" + month + "/" + day;

      const goods = results.data.goods;
      const filterGood = goods.filter((item, index) => {
        if(item.id === this.props.currentUser.id) return true
      });
      if(filterGood.length === 0){
        this.setState({btnState: false});
      }else{
        this.setState({btnState: true});
      }

      this.setState({
        post: results.data,
        date: date,
        goodCount: Object.keys(this.state.post.goods).length
      });
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

  createComment = (content, post_id) => {
    axios.post('http://192.168.99.100:3001/comments',{content: content, post_id: post_id}, {headers: this.props.token})
    .then((response) => {
      console.log(response)
      const newData = update(this.state.posts.comments, {$push:[response.data]});
      this.setState({comments: newData});
      this.props.history.push('/')
    })
    .catch((data) =>{
      console.log(data);
    });
  }

  goodOn = () => {
    axios
    .post(`http://192.168.99.100:3001/goods`,{id: this.state.post.id}, {headers: this.props.token})
    .then((results) => {
      console.log(results);
      this.setState({
        btnState: true,
        goodCount: this.state.goodCount + 1
      });
    })
    .catch((data) => {
      console.log(data);
    });
  }

  goodOff = () => {
    axios
    .delete(`http://192.168.99.100:3001/goods/${this.state.post.id}`,{headers: this.props.token, data: {}})
    .then((results) => {
      console.log(results)
      this.setState({
        btnState: false,
        goodCount: this.state.goodCount - 1
      });
    })
    .catch((data) => {
      console.log(data);
    });
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

  goodBtn = (id) => {
    if(id != null){
      if(this.state.btnState){
        return(
          <Button variant="contained" color="primary" onClick={this.goodOff}>
            <ThumbUpIcon/>
          </Button>
        );
      }else{
        return(
          <Button variant="outlined" onClick={this.goodOn}>
            <ThumbUpIcon/>
          </Button>
        );
      }
    }else{
      return(
        <Button variant="outlined">
          <ThumbUpIcon/>
        </Button>
      );
    }
  }

  render(){
    console.log(this.state);
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
          <br/>
          <Typography variant="h6" component="p">
            {this.state.post.content}
          </Typography>
          <br/><br/><br/>
          <Box my={2}>
            {this.goodBtn(this.props.currentUser.id)}
          </Box>
        </CardContent>

        <hr/>

        <CardContent>
          <h3>
            コメントを書く
          </h3>
          <CommentForm createComment={this.createComment}/>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(Show);