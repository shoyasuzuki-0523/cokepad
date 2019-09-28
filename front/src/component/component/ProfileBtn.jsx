import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProfileBtn extends Component {
  cpProfile = () => {
    this.props.history.push(`/Profile/${this.props.match.params.id}`);
  }
  
  render() {
    return(
      <div onClick={this.cpProfile}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(ProfileBtn);