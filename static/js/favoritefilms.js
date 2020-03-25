import React, {Component} from "react";
import APIClient from "./apiClient";


class  FavoriteFilms extends Component {
        constructor(props) {
                super(props);
                this.state={
                        faveMovies:[]
                }
        }
componentDidMount(){
   //get all the films in db
   let     apiClient=new APIClient();

apiClient.getAllMovies().then(data=>console.log(data))


}
        render() {

                return (<div><h1>Vos Films Favoris</h1></div>);

        }
}
export default FavoriteFilms