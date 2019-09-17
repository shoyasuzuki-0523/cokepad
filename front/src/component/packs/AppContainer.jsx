import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import SignIn from './SignIn';
import SignUp from './SignUp';

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: {},
      currentUser: {},
      sign: false
    }
  }

  signIn = (email, password) => {
    axios.post('http://192.168.99.100:3001/auth/sign_in',{
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
      const headers = response.headers;
      const token = {
        'access-token': headers['access-token'],
        'client': headers['client'],
        'uid': headers['uid']
      };
      this.setState({
        token: token,
        currentUser: response.data.data,
        sign: true
      });
      this.props.history.push('/');
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  signUp = (name, email, password, passwordConfirmation) => {
    axios.post('http://192.168.99.100:3001/auth',{
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    })
    .then((response) => {
      console.log(response)
      const headers = response.headers;
      const token = {
        'access-token': headers['access-token'],
        'client': headers['client'],
        'uid': headers['uid']
      };
      this.setState({
        token: token,
        currentUser: response.data.data,
        sign: true
      });
      this.props.history.push('/');
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  signOut = () => {
    axios.delete('http://192.168.99.100:3001/auth/sign_out', {headers: this.state.token, data: {}})
    .then((response) => {
      console.log(response);
      this.setState({
        token: {},
        currentUser: {},
        sign: false
      })
      this.props.history.push('/');
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <Switch>
        <Route path='/SignIn' render={() => <SignIn signIn={this.signIn}/>}/>
        <Route path='/SignUp' render={() => <SignUp signUp={this.signUp}/>}/>
        <Route path='/' render={({match}) => <Nav sign={this.state.sign} token={this.state.token} currentUser={this.state.currentUser} signOut={this.signOut} match={match}/>}/>
      </Switch>
    );
  }
}

export default withRouter(AppContainer);