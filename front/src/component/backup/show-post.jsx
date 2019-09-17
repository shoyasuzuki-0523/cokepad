import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Show extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://6ccf1b5402214ffdb31120bbd0a35c58.vfs.cloud9.us-east-2.amazonaws.com/api/v1/posts/${this.props.match.params.id}`)
      .then((results) => {
        console.log(results);
        this.setState({ post: results.data.data });
      })
      .catch((data) =>{
        console.log(data);
      });
  }

  render(){
    const classes = makeStyles({
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });

    return(
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h2" component="h2">
            {this.state.title}
          </Typography>
        </CardContent>
        
        <CardActions>
          <Button>
            Edit
          </Button>
          <Button>
            Delete
          </Button>
        </CardActions>
          
        <br/><ht/><br/>
        
        <CardContent>
          <Typography variant="body2" component="p">
            {this.state.component}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Show;