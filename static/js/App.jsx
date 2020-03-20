import React from "react";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          genres:[],
            nom:'',
            resume:''
        }
        this.getPythonHello=this.getPythonHello.bind(this);
this.addFavorite=this.addFavorite.bind(this);
this.listFave=this.addFavorite.bind(this);


    }
componentDidMount() {
     let movie_id= Math.floor(Math.random() * 100);
fetch('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key=00dd795327e61a36353c4ebdcb82df44&language=en-US')
  .then(response => response.json())
  .then(data => {
        let  genres_updated = data.genres.map((genres)=>{
           return genres.name

        })


  this.setState(
  {
genres: genres_updated,
      nom:data.name,
      resume:data.overview

})
}
  );
}
addFavorite(){
        //sent a request to python endpoint to add this movie to mongodb
}
listFave(){
        //show the list of the movies added in database
}
    getPythonHello() {
   $.get(window.location.href + 'hello', (data) => {
            console.log(data);

        });

    }
    render () {
        return (

          <div className="container">

<div className="genres">
genres : {this.state.genres}
</div>
              <div className="name">
     name:          {this.state.nom}
     </div><div className="resume">
resume :              {this.state.resume}
</div>

<button>Voir Autre</button>
              <button onClick={this.addFavorite}>Ajouter Au favoris</button>
   <button onClick={this.listFave}>Ma Liste des Favoris</button>
              </div>

        );
    }
}
