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
import  OneFaveMovie from './OneFave'
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
                    isDeleted:false,

                        faveMovies:[]
                }
            this.classes= useStyles;


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
   <div className={this.classes.root}><h3>Vos Films Favoris</h3>
           {this.state.faveMovies.map(row=>{

                          return (

      <OneFaveMovie row={row}/>
                              )})}
    </div>
  );
}
}
export default FavoriteFilms