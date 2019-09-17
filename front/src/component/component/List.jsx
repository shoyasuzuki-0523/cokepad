import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Post from '../component/Post';

class List extends Component {
  render() {
    if (this.props.posts.length === 0){
      return(
        <Typography variant="h6" component="h2">
          まだなにも投稿されていません。
        </Typography>
      );
    }
    return(
      <div>
        <Grid container spacing={3}>
          {this.props.posts.map( (post, i) => {
            return(
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Post
                  key={i}
                  id={post.id}
                  createdAt={post.created_at}
                  title={post.title}
                  name={post.user.name}
                  content={post.content}
                />  
                <br/>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default List;