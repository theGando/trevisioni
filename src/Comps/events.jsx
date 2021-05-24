import React from 'react';
import { Button, Card, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import '../App';
import './days';
import EventBox from './eventBox';

function Event(eventProps) {
    const classes = useStyles();
    return (
        <div style={{ textAlign: 'left' }} className={classes.eventButton}>
            <center>
                <Typography variant='h4'>{eventProps.artistName}</Typography><p />
                <Typography variant='h6'>{eventProps.activityName}</Typography><p />
                <Typography variant='inherit' >{eventProps.startHour}-{eventProps.endHour}</Typography>
            </center>
        </div>
    )
}

export default Event;