import React, { Component } from 'react';
import List from '../component/List';

class Index extends Component {
  componentDidMount(){
    return this.props.getPosts
  }
  
  createPost = (title, content) => {
    return this.props.createPost(title, content)
  }

  render(){
    return(
      <div>
        <h3>新着順</h3>
        <hr />
        <List posts={this.props.posts} />
      </div>
    );
  }
}

export default Index;