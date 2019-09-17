import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HomeBtn extends Component {
  cpHome = () => {
    this.props.history.push('/');
  }
  
  render() {
    return(
      <div onClick={this.cpHome}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(HomeBtn);