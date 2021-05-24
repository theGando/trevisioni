import React from 'react';
import { Button, Card, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import Event from './events';
import './days';

function EventBox(eventProps) {
    const classes = useStyles();
    let eventExist;
    return (
        <div>
            <Grid item style={{ margin: '2px' }}>
                <Card style={{ backgroundColor: '#00000000' }} className={classes.eventButton} >
                    <Button className={classes.eventButton} >
                        {(eventProps.artistName == null || eventProps.activityName == null)
                            ? <Typography className={classes.eventButton}>EVENT COMING SOON</Typography> : <Event {...eventProps} />}
                    </Button>
                </Card>
            </Grid>
        </div>
    )
}

export default EventBox;