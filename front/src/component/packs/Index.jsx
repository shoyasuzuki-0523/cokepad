import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../component/List';

class Index extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    return this.props.getPosts
  }
  
  createPost = (title, content) => {
    return this.props.createPost(title, content)
  }

  loading = (props) => {
    if(props.loading){
      return(
        <CircularProgress/>
      );
    }else{
      return(
        <div>
          <h3>新着順</h3>
          <hr />
          <List posts={props.posts} />
        </div>
      );
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.loading(this.props)}
      </React.Fragment>
    );
  }
}

export default Index;