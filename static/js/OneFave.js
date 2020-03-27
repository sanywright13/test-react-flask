import React, {Component} from "react";
import APIClient from "./apiClient";
import {Grid} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class OneFaveMovie extends Component {
   constructor(props) {

                super(props);
                this.state={
                    isDeleted:false,
                }
                this.deleteMovie=this.deleteMovie.bind(this)

        }


    deleteMovie(item){
         let   apiClient=new APIClient()
    apiClient.delete(item);
         this.setState({
             isDeleted:true
         })

}
render(){
       const img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+this.props.row.backdrop_path
       return(

           <div> {this.state.isDeleted?<div></div>
          : <Paper >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img  alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {this.props.row.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  langue :{this.props.row.original_language}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Type : {this.props.row.media_type}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={(e)=> this.deleteMovie(this.props.row)}>
                  Supprimer
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>}
           </div>
       )
}
}
export default OneFaveMovie