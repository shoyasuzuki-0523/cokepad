import React from 'react'
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import HomeBtn from '../component/HomeBtn'

class About extends React.Component {
  render(){
    return(
      <div>
        <h1>About</h1>
        <h2>I am {this.props.name}</h2>
        <HomeBtn>
          <Button variant="contained" color="primary">
            Home
          </Button>
        </HomeBtn>
      </div>
    )
  }
}

export default withRouter(About);