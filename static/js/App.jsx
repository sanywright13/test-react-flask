import React from "react"
import SignUp from "./Login/login";
import {BrowserRouter as Router , Switch,
  Route,
  Link } from "react-router-dom";
import Nav from "./Login/nav";
import Header from "./Header";
import Movielist from "./movieslost";
import SignIn from "./Login/signin";
import ProtecdRoute from "./Login/ProtectedRoute";
class App extends React.Component {
    constructor() {
        super();
       this.state={
           user:false
       }
       this.handleLogin=this.handleLogin.bind(this);
       this.handleLogOut=this.handleLogOut.bind(this);
    }
    handleLogin(){
        this.setState({user:true});

    }
    handleLogOut(){
        this.setState({user:false});

}
    render(){
        return (<div>
<Router>
    <Header  />

<Switch>
<Route exact path="/" render={(props) => <Movielist {... props} handleLogOut={this.handleLogOut} />} />

 <ProtecdRoute exact path={`/signin`}  handleLogin={this.handleLogin} user={this.state.user} component={SignIn}/>






</Switch>
</Router>

        </div>)
    }
}


export default App