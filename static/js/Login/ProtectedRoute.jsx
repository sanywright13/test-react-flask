import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,Redirect
  } from "react-router-dom";
const ProtecdRoute = ({component:Comp ,user,handleLogin,...rest}) =>{
return (
    <Route {...rest} render = {
        props =>{
        if(user==false){
       return  <Comp {...rest}{...props} handleLogin={handleLogin} />
    }
    else {
      return  <Redirect to={
{
                pathname: '/',
              state: {
                from: props.location
            }
        }
    }
        />
    }
        }
    } />
)
}
export default ProtecdRoute