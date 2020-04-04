import React from 'react';
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
import {Login} from "./user";
import Redirect from "react-router-dom/es/Redirect";

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

 class  SignIn extends React.Component {
    constructor() {
        super();
        this.state={
             email: '',
    password: '',
            auth:false
        }
          this.addEmail=this.addEmail.bind(this)
   this.addPass=this.addPass.bind(this)
        this.enter=this.enter.bind(this)
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
enter(){
  const userUpdated={email:this.state.email,password:this.state.password}
Login(userUpdated).then(res=>{

  console.log(res)
    if(res.email){
        this.setState({auth:true})
    }
    else{
           this.setState({auth:false})
    }

})

}
     render() {
        if(this.state.auth){return(<Redirect to="/home" />)}
        else{
         return (
             <Container component="main" maxWidth="xs">
                 <CssBaseline/>
                 <div >
                     <Avatar >
                         <LockOutlinedIcon/>
                     </Avatar>
                     <Typography component="h1" variant="h5">
                         Sign in
                     </Typography>
                     <form >
                         <TextField
                             variant="outlined"
                             margin="normal"
                             required
                             fullWidth
                             id="email"
                             label="Email Address"
                             name="email"
                             autoComplete="email"
                             autoFocus
                             value={this.state.email}
                             onChange={this.addEmail}
                         />
                         <TextField
                             variant="outlined"
                             margin="normal"
                             required
                             fullWidth
                             name="password"
                             label="Password"
                             type="password"
                             id="password"
                             autoComplete="current-password"
                             value={this.state.password}
                             onChange={this.addPass}
                         />
                         <FormControlLabel
                             control={<Checkbox value="remember" color="primary"/>}
                             label="Remember me"
                         />
                          <Button

                        fullWidth

                        color="primary"
                onClick={this.enter}

                    >
                             Sign In
                         </Button>
                         <Grid container>
                             <Grid item xs>
                                 <Link href="#" variant="body2">
                                     Forgot password?
                                 </Link>
                             </Grid>
                             <Grid item>
                                 <Link href="#" variant="body2">
                                     {"Don't have an account? Sign Up"}
                                 </Link>
                             </Grid>
                         </Grid>
                     </form>
                 </div>
                 <Box mt={8}>
                     <Copyright/>
                 </Box>
             </Container>
         );}
     }
 }
 export  default SignIn