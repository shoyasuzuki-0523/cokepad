import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.comments.map((comment,i) => {
          return(
            <div>
              <hr/>
              <p>{comment.user.name}</p>
              <p>{comment.content}</p>
              <hr/>
            </div>
            );
        })}
      </div>
    );
  }
}

export default CommentList;