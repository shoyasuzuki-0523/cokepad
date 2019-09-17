import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignInBtn extends Component {
  cpHome = () => {
    this.props.history.push('/SignIn');
  }
  
  render() {
    return(
      <div onClick={this.cpHome}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(SignInBtn);