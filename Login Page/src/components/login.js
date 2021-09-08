import React from "react";
import {Avatar, Grid, Paper, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const Login=()=>{

    const paperStyle={padding :20, height:'70vh', width : 280, margin :'20px auto'}
    const avatarStyle={backgroundColor:'#00F0FF'}
    const buttonStyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/> </Avatar>
            <h2>Sign In</h2> 
        </Grid>
            <TextField label='User Name' placeholder='Enter User Name' fullWidth required />
            <TextField label='Password' placeholder='Enter Password' type = 'password' fullWidth required />
            <Grid align='left'>
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
        }
        label="Remember me"
      />
      </Grid>
        <Button type ='submit' color ='primary' variant='contained' style={buttonStyle} fullWidth >Sign In </Button>
                <Typography>
                <Link href="#">
                Forgot Password ?
                </Link>
                </Typography>   
                <Typography> Do you have an account ?
                <Link href="#">
                Sign Up
                </Link>
                </Typography> 
            </Paper>
        </Grid>
    )
}

export default Login
