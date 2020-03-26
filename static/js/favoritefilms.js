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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  images: {
    width: 50  ,
    height: 50,
  },

}));

class  FavoriteFilms extends Component {

        constructor(props) {

                super(props);
                this.state={
                    delete:false
                        faveMovies:[]
                }
            this.classes= useStyles;
                this.deleteMovie=this.deleteMovie.bind(this)

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
deleteMovie(item){
         let   apiClient=new APIClient()
    apiClient.delete(item);

}
     render() {

            return (
   <div className={this.classes.root}><h3>Vos Films Favoris</h3>
           {this.state.faveMovies.map(row=>{
               const img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+row.backdrop_path
                          return (

      <Paper className={this.classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img className={this.classes.images} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {row.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  langue :{row.original_language}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Type : {row.media_type}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={(e)=> this.deleteMovie(row)}>
                  Supprimer
                </Typography>
              </Grid>
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