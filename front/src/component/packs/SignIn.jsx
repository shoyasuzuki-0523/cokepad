import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  handleEmailChange = email => event => {
    this.setState({email: event.target.value});
  };
  
  handlePasswordChange = password => event => {
    this.setState({password: event.target.value});
  };

  test = () => {
    this.props.signIn(this.state.email, this.state.password)
  }

  render(){
    return(
      <Box textAlign="center" mt={10}>
        <Grid container justify="center">
          <Grid item>
            <Avatar>
              <LockOutlinedIcon/>
            </Avatar>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h5" gutterBottom>
          ログイン
        </Typography>
        <div>
          <TextField
            id="email"
            label="Email"
            onChange={this.handleEmailChange('email')}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            onChange={this.handlePasswordChange('password')}
            type="password"
            margin="normal"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <Button variant="contained" color="primary" onClick={this.test}>
            login
          </Button>
        </div>
      </Box>
    );
  }
}

export default SignIn;