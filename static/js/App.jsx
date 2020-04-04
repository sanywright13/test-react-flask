import React from "react"
import SignUp from "./Login/login";
import {BrowserRouter as Router , Switch,
  Route,
  Link } from "react-router-dom";
import Nav from "./Login/nav";
import Header from "./Header";
import Movielist from "./movieslost";
import SignIn from "./Login/signin";

class App extends React.Component {
    render(){
        return (<div>
<Router>
    <Header/>

<Switch>
<Route exact path="/">
 <Movielist />
    </Route>
    <Route path="/register">
    <SignUp/>
    </Route>
    <Route path="/signin">
        <SignIn />
    </Route>
    <Route path="/home">
        <Movielist />
    </Route>
</Switch>
</Router>

        </div>)
    }
}


export default App