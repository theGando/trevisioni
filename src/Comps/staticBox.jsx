import React from 'react';
import { Button, Card, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import Event from './events';
import './days';

function StaticBox(eventProps) {
    const classes = useStyles();
    let eventExist;
    return (
        <div>
            <Grid item>
                <Card style={{ backgroundColor: '#00000000' }}>
                    <Button className={classes.eventButton} >
                        {(eventProps.artistName == null || eventProps.activityName == null) ?
                            <Typography>COMING SOON</Typography> : <Event {...eventProps} />}
                    </Button>
                </Card>
            </Grid>
        </div>
    )
}

export default StaticBox;