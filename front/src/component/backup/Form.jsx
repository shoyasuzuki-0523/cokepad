import React, { Component } from 'react';
import update from 'react-addons-update'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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
  }

  handleChange = title => event => {
    this.setState({title: event.target.value});
  };
  
  handleContentChange = content => event => {
    this.setState({content: event.target.value});
  };

  hundleSubmit = () => {
    this.props.createPost(this.state.title,this.state.content);
    this.setState({title:'', content:''});
  }

  render(){
    const classes = makeStyles(theme => ({
      textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
      },
      dense: {
        marginTop: theme.spacing(2),
      },
      menu: {
        width: 200,
      },
    }));
    
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Title"
            className={classes.textField}
            onChange={this.handleChange('title')}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows="4"
            className={classes.textField}
            onChange={this.handleContentChange('content')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <Button variant="contained" onClick={this.hundleSubmit}>
          submit
        </Button>
      </div>
    );
  }
}

export default Form;