import React, { Component } from 'react';
import List from '../component/List';

class Index extends Component {  
  createPost = (title, content) => {
    return this.props.createPost(title, content)
  }

  componentDidMount() {
    console.log(this.props.posts)
    return this.props.getPosts
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