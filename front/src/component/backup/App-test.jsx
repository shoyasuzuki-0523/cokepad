import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import {Nav} from '../component/Nav'
import About from './About'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav>
            <Route exact path='/' component={Home}/>
            <Route path='/About' render={ () => <About name='shoya' /> }/>
          </Nav>
        </Router>
      </div>
    );
  }
}

export default App;

render(
  <App />,
  document.getElementById('app')
);