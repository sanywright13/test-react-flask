import React from "react"

import {BrowserRouter as Router , Switch,
  Route,
  Link } from "react-router-dom";

const Nav = () =>{
    return (<div>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Sign up</Link>
            <Link to="signin">Sign In</Link>
        </nav>
    </div>)
}
export default Nav