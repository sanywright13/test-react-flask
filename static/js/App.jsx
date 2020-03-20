import React from "react";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          genres:[],
            name:'',
            resume:''
        }
        this.getPythonHello=this.getPythonHello.bind(this);
    }
componentDidMount() {
fetch('https://api.themoviedb.org/3/movie/419704?api_key=00dd795327e61a36353c4ebdcb82df44&language=en-US')
  .then(response => response.json())
  .then(data => {
        let  genres_updated = data.genres.map((genres)=>{
           return genres.name

        })


  this.setState(
  {
genres: genres_updated,
      name:data.name,
      resume:data.overview

})
}
  );
}
    getPythonHello() {
   $.get(window.location.href + 'hello', (data) => {
            console.log(data);

        });

    }
    render () {
        return (

          <div>


genres : {this.state.genres}

     name:          {this.state.name}
resume :              {this.state.resume}

<button onClick={this.getPythonHello}>click</button>
              </div>

        );
    }
}
