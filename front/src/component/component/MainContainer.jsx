import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import update from 'react-addons-update';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Index from '../packs/Index';
import Profile from '../packs/profile';
import Show from '../packs/Show';
import Form from '../packs/Form';
import Update from '../packs/Update';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://192.168.99.100:3001/posts')
    .then((results) => {
      console.log(results)
      this.setState({posts: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  createPost = (title, content) => {
    axios.post('http://192.168.99.100:3001/posts',{title: title, content: content}, {headers: this.props.token})
    .then((response) => {
      console.log(response)
      const newData = update(this.state.posts, {$push:[response.data]});
      this.setState({posts: newData});
      this.props.history.push('/')
    })
    .catch((data) =>{
      console.log(data);
    });
  }

  deletePost = (id) => {
    axios.delete(`http://192.168.99.100:3001/posts/${id}`,{headers: this.props.token, data: {}})
    .then((response) => {
      console.log(response)
      const postIndex = this.state.posts.findIndex(post => post.id === parseInt(id, 10))
      const deletedPosts = update(this.state.posts, {$splice: [[postIndex, 1]]})
      this.setState({posts: deletedPosts})
      this.props.history.push('/')
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  updatePost = (id, title, content) => {
    axios.patch(`http://192.168.99.100:3001/posts/${id}`,{title: title, content: content}, {headers: this.props.token})
    .then((response) => {
      console.log(response)
      const postIndex = this.state.posts.findIndex((x) => x.id === parseInt(id, 10))
      const posts = update(this.state.posts, {[postIndex]: {$set: response.data}})
      this.setState({posts: posts})
      this.props.history.push('/');
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render(){
    return(
      <div>
        <Container fixed>
          <Route exact path='/' render={ () => <Index posts={this.state.posts} getPosts={this.getPosts} createPost={this.createPost} />}/>
          <Route exact path="/posts/:id/show" render={ ({match}) => <Show deletePost={this.deletePost} match={match} currentUser={this.props.currentUser}/> }/>
          <Route exact path='/posts/:id/update' render={ ({match}) => <Update updatePost={this.updatePost} match={match}/>}/>
          <Route path='/Form' render={() => <Form createPost={this.createPost} />}/>
          <Route path='/Profile' render={() => <Profile currentUser={this.props.currentUser}/>}/>
        </Container>
      </div>
    );
  }
}

export default withRouter(MainContainer);