import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import APIClient from "../apiClient";
import Redirect from "react-router-dom/es/Redirect";
import {Register} from './user'
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class SignUp  extends React.Component{
constructor() {
  super()
  this.state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  authenticated:false
  }
  this.addName = this.addName.bind(this)
  this.addLastName = this.addLastName.bind(this)
  this.addEmail=this.addEmail.bind(this)
   this.addPass=this.addPass.bind(this)
  this.addUser=this.addUser.bind(this)
}
 addName(event) {
    this.setState({
      name:   event.target.value

    })
}
 addLastName(event){
  this.setState({
      lastName:   event.target.value

    })
}
addEmail(event) {
  this.setState({
     email:   event.target.value

    })
}
addPass (event) {
  this.setState({
      password:   event.target.value

    })
}


addUser(){
  const userUpdated={name:this.state.name,lastName: this.state.lastName,email:this.state.email,password:this.state.password}
Register(userUpdated).then(res=>{
    const email=res.email
  console.log(res)
    if(email){
        console.log("user added ")
        this.setState({  authenticated:true})
    }
    else{
        console.log(res.result)
            this.setState({  authenticated:false})
    }
})


 }




render() {
if(this.state.authenticated==false) {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth

                                label="First Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.addName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth

                                label="Last Name"

                                autoComplete="lname"
                                value={this.state.lastName}
                                onChange={this.addLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth

                                label="Email Address"

                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.addEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth

                                label="Password"
                                type="password"

                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.addPass}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button

                        fullWidth

                        color="primary"
                        onClick={this.addUser}

                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>

            {this.state.authenticated}
        </Container>
    )
}else{
    return (<div><Redirect to="/"/></div>)
}

  }

}
export default SignUp
