import Grid from "@material-ui/core/Grid";
import MovieCard from "./movies";
import React from "react";

function OneMovie(props){

    return(
<div>
<h3>Trending Films </h3>
  <Grid container spacing={3}>

{props.movies.map(item=>
   <Grid item xs={6}>
            <MovieCard movie={item}/>
        </Grid>
    )
}
 </Grid>
    </div>
)
    }

    export default OneMovie