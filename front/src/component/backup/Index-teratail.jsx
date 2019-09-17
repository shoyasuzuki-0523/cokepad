import React, { Component } from 'react'
import { withRouter } from 'react-router';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import Post from '../component/Post';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    axios
      .get('https://6ccf1b5402214ffdb31120bbd0a35c58.vfs.cloud9.us-east-2.amazonaws.com/api/v1/posts')
      .then((results) => {
        console.log(results)
        this.setState({ posts: results.data })
      })
      .catch((data) =>{
        console.log(data)
      })
  }

  render(){
    return(
      <div>
        {(() => {
          if (this.state.posts.length > 0) {
            return (
              this.state.posts.map( (post, i) => {
                return(
                  <Post
                    key={i}
                    createdAt={post.created_at}
                    name='testUser'
                    title={post.title}
                    content={post.content}
                  />
                )
              })
            )
          } else {
            return (
              <Typography variant="h6" component="h2">
                まだなにも投稿されていません。
              </Typography>
              )
          }
        })()}
      </div>
    );
  }
}

export default Index;