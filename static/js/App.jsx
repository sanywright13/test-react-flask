import React from "react";
import Hello from "./Hello.jsx";
import { PageHeader } from "react-bootstrap";

require('/home/sanaa/PycharmProjects/test-react-flask/static/css/fullstack.css');
var $ = require('jquery');


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

componentDidMount(){
  fetch('https://api.themoviedb.org/3/movie/419704?api_key=00dd795327e61a36353c4ebdcb82df44&language=en-US').
    then(response => response.json() ).then(data => console.log(data.genres));

}
    render () {
        return (
            <PageHeader>
                <div className='hhhhhheader-contents'>
                </div>
            </PageHeader>
        );
    }
}
