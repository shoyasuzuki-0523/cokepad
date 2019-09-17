import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ShowBtn extends Component {
  cpShow = () => {
    this.props.history.push(`/posts/${this.props.id}/show`);
  }
  
  render() {
    return(
      <div onClick={this.cpShow}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(ShowBtn);
