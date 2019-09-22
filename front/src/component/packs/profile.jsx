import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Paper>
        <Typography variant="h4" component="h4">
          {this.props.currentUser.name}
        </Typography>
      </Paper>
    );
  }
}

export default Profile;