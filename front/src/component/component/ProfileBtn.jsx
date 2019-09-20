import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProfileBtn extends Component {
  cpHome = () => {
    this.props.history.push('/Profile');
  }
  
  render() {
    return(
      <div onClick={this.cpHome}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(ProfileBtn);