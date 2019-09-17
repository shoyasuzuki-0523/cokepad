import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class IndexBtn extends Component {
  cpIndex = () => {
    this.props.history.push('/Index');
  }
  
  render() {
    return(
      <div onClick={this.cpIndex}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(IndexBtn);