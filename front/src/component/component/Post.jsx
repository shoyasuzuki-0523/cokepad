import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowBtn from '../component/ShowBtn';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class Post extends Component {
  render(){
    var t = new Date(this.props.createdAt);
    var year  = t.getFullYear();
    var month = t.getMonth() + 1;
    var day   = t.getDate();
    var date = year + "/" + month + "/" + day

    return (
      <Paper>
        <Box ml={2}>
          <Grid container direction="column" justify="space-between" alignItems="flex-start">
            <Grid item>
              <Typography color="textSecondary">
                {this.props.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="h2">
                {this.props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" gutterBottom>
                {date}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" component="p">
                {this.props.content}
              </Typography>
            </Grid>
            <Grid item>
              <ShowBtn id={this.props.id}>
                <Button size="small">Learn More...</Button>
              </ShowBtn>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  }
}

export default Post;