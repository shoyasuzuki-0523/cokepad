import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import AboutBtn from '../component/AboutBtn'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <AboutBtn>
          <Button variant="contained" color="primary">
            About
          </Button>
        </AboutBtn>
      </div>
    )
  }
}

export default withRouter(Home);