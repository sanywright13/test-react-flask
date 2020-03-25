import React, {Component} from "react";
import APIClient from "./apiClient";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
class  FavoriteFilms extends Component {

        constructor(props) {
                super(props);
                this.state={
                        faveMovies:[]
                }
        }

componentDidMount(){
   //get all the films in db
   let     apiClient=new APIClient();

apiClient.getAllMovies().then(data=> {

            this.setState(prev => {
                    return {faveMovies: data}

            })
    }

)
}
     render() {

            return (
   <div >
           {this.state.faveMovies.map(row=>{
                          return (
      <Paper >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img  alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {row.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
                              )})}
    </div>
  );
}
}
export default FavoriteFilms