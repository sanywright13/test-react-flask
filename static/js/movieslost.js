import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import TabPanel from './tabs.js'
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
require('../css/fullstack.css');
let $ = require('jquery');

export default class Movielist extends React.Component {
    constructor() {
        super();
        this.state= {
         movies:[]
        }
    }
componentDidMount() {
     //let movie_id= Math.floor(Math.random() * 100);
fetch('https://api.themoviedb.org/3/trending/all/day?api_key=00dd795327e61a36353c4ebdcb82df44')
  .then(response => response.json())
  .then(data =>

      {
        let movies_updated =  data.results
console.log(movies_updated)
          this.setState({
              movies:movies_updated
          })
      }
      )
    console.log(this.state.movies)
}

render () {


        return (
            <div>

          <div className="container mt-5">

 <div >
     <TabPanel  movies={this.state.movies} />

    </div>
</div>
            </div>);
    }
}
