import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import TabPanel from './tabs.js'
import Grid from '@material-ui/core/Grid';
require('../css/fullstack.css');
let $ = require('jquery');

export default class App extends React.Component {
    constructor() {
        super();
        this.state= {
         movies:[]
        }
        this.getPythonHello=this.getPythonHello.bind(this);
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
/*
addFavorite(item){
        //sent a request to python endpoint to add this movie to mongodb
    //call the addMovie endpoint
  console.log(item)

      this.apiClient = new APIClient();

    //send the element that i want
    let item_app=item
    let item_appdated={}
   for (let property in item_app) {
       if(property!= "release_date") {
item_appdated[property]=item_app[property]

       }

   }
  console.log(item_appdated)


    this.apiClient.createKudo(item_appdated);

}
*/
    getPythonHello() {
   $.get(window.location.href + 'hello', (data) => {
            console.log(data);

        });

    }
    render () {


        return (

          <div className="container mt-5">
 <div >
     <TabPanel  movies={this.state.movies} />

    </div>
</div>
        );
    }
}
