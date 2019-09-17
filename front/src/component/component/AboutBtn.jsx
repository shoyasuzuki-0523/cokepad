import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AboutBtn extends Component {
  cpAbout = () => {
    this.props.history.push('/About');
  }
  
  render() {
    return(
      <div onClick={this.cpAbout}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(AboutBtn);