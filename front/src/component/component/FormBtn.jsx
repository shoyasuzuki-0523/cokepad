import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

class FormBtn extends Component {
  cpForm = () => {
    this.props.history.push(`/Form`);
    console.log(this.props.history.location.pathname)
  }

  render() {
    if(this.props.history.location.pathname === '/Form'){
      return(
        <Hidden xsUp>
          {this.props.children}
        </Hidden>
      )
    }
    return(
      <div onClick={this.cpForm}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(FormBtn);