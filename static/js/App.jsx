import React from "react";
import { PageHeader } from "react-bootstrap";

import APIClient from "./apiClient";
require('../css/fullstack.css');
var $ = require('jquery');


export default class App extends React.Component {
    constructor() {
        super();
        this.state= {
         movies:[]
        }
        this.getPythonHello=this.getPythonHello.bind(this);
this.addFavorite=this.addFavorite.bind(this);



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

    getPythonHello() {
   $.get(window.location.href + 'hello', (data) => {
            console.log(data);

        });

    }
    render () {
        return (

          <div className="container mt-5">


    {this.state.movies.map(item=>{
let src_img = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+item.backdrop_path
   return (
    <div key={item.id} className="row">
        <div className="col-8 media">

 <img src={src_img} className="mr-3" alt="..."/>
     <div className="media-body">
    <div>  id:  {item.id}</div>
   <div> Nom :    { item.title}</div>
     <div>   date de sortie    :{ item.release_date}</div>
         <div>Rating : {item.vote_average}</div>
         <div>Genres :{item.genre_ids.map(id=>{

        return     <span key={id}>{id}</span>

         })} </div>

   <div>Resume :     {item.overview}</div>
      <button type="button" className="btn btn-info" value={item.title}
              onClick={ (e) =>
                  this.addFavorite(item)}>favoriter</button>

    </div>
 </div>
        </div>
)
})}

</div>


        );
    }
}
