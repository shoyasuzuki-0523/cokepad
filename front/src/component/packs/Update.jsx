import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://192.168.99.100:3001/posts/${this.props.match.params.id}`)
      .then((results) => {
        console.log(results);
        this.setState({ title: results.data.post.title, content: results.data.post.content});
      })
      .catch((data) =>{
        console.log(data);
        return(<h1>not found(404)</h1>);
      });
  }

  handleChange = title => event => {
    this.setState({title: event.target.value});
  };
  
  handleContentChange = content => event => {
    this.setState({content: event.target.value});
  };

  handleSubmit = () => {
    this.props.updatePost(this.props.match.params.id, this.state.title, this.state.content)
  }

  render(){
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label="Title"
            onChange={this.handleChange('title')}
            fullWidth
            margin="normal"
            variant="outlined"
            value={this.state.title}
          />
          <hr />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows="30"
            fullWidth
            onChange={this.handleContentChange('content')}
            margin="normal"
            variant="outlined"
            value={this.state.content}
          />
        </form>
        <Button variant="contained" onClick={this.handleSubmit}>
          submit
        </Button>
      </div>
    );
  }
}

export default Form;