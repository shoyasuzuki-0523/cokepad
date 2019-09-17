import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignUpBtn extends Component {
  cpSignUp = () => {
    this.props.history.push('/SignUp');
  }
  
  render() {
    return(
      <div onClick={this.cpSignUp}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(SignUpBtn);