import React from 'react';
import { Grid, Paper, Avatar, TextField, Typography } from '@material-ui/core';
import useStyles from '../Comps/styles';

function Login() {
    const classes = useStyles();
    return (
        <Grid style={{ marginTop: 150 }}>
            <Paper elevation={15} className={classes.logPaper}>
                <Grid align='center'>
                    <Typography variant='h2'>Log In</Typography>
                </Grid>
                <TextField variant='outlined' label='Username' placeholder='Inserisci Username' fullWidth required style={{ marginTop: 30 }} />
                <TextField variant='outlined' label='Password' placeholder='Inserisci Password' type='password' fullWidth required style={{ marginTop: 30 }} />
            </Paper>
        </Grid>
    )
}

export default Login;