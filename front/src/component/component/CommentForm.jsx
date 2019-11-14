import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange = content => event => {
    this.setState({content: event.target.value});
  };

  handleSubmit = () => {
    return this.props.createComment;
  }

  render(){
    return(
      <Box>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            label="ここにコメントを書いてください"
            multiline
            rows="3"
            fullWidth
            onChange={this.handleContentChange('content')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <Button variant="contained" onClick={this.handleSubmit}>
          submit
        </Button>
      </Box>
    );
  }
}

export default CommentForm;