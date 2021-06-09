import React from 'react';
import { Typography } from '@material-ui/core';
import Days from '../Comps/days';
import useStyles from '../Comps/styles';

function Calendar() {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <Typography variant='h1' align="center" color="textPrimary" gutterBottom>
                EVENTI
            </Typography>
            <Days />
        </div>
    )
}
export default Calendar;