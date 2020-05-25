import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import TabPanel from './tabs.js'
import {LogOut} from "./Login/user";
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
require('../css/fullstack.css');
let $ = require('jquery');
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {Login} from "./Login/user";

export default class Movielist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
         movies:[]
        }
      this.handle=this.handle.bind(this);
        this.logOut=this.logOut.bind(this)
    }
    handle(){


this.logOut()

    }
    logOut(){

        LogOut().then(res=>{

  console.log(res)


})
            const { history } = this.props;
   if(history) history.push(`/signin`);
   console.log(history)
                 this.props.handleLogOut()

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
<div>                                    <Button variant="contained" onClick={this.handle}>Sign Out</Button>
</div>
          <div className="container mt-5">

 <div >
     <TabPanel  movies={this.state.movies} />

    </div>
</div>
            </div>);
    }
}
