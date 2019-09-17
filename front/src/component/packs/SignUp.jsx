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
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false
    }
  }

  handleNameChange = name => event => {
    this.setState({name: event.target.value});
  };

  handleEmailChange = email => event => {
    this.setState({email: event.target.value});
  };
  
  handlePasswordChange = password => event => {
    this.setState({password: event.target.value});
  };

  handlePasswordConfirmationChange = passwordConfirmation => event => {
    this.setState({passwordConfirmation: event.target.value});
  };

  test = () => {
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.passwordConfirmation
    );
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
          新規登録
        </Typography>
        <div>
        <TextField
            id="name"
            label="name"
            onChange={this.handleNameChange('name')}
            margin="normal"
            variant="outlined"
          />
        </div>
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
        <div>
          <TextField
            id="password-confirmation"
            label="PassworsConfirmation"
            onChange={this.handlePasswordConfirmationChange('passwordConfirmation')}
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