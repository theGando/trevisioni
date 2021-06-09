import React from 'react';
import { Grid, Paper, Avatar, TextField, Typography } from '@material-ui/core';
import useStyles from '../Comps/styles';
import GoogleLogin from '../Comps/googleLogin'

function Login() {
    const classes = useStyles();
    return (
        <div>
            <GoogleLogin />
        </div>
    )
}

export default Login;