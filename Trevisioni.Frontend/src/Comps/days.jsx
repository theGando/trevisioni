import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import EventBox from '../Comps/eventBox';

function Days(eventProps) {
    const classes = useStyles();
    return (
        <div style={{ marginBottom: '50px' }}>
            <Container>
                <Grid container spacing={4} direction='column' justify='space-round' alignItems='center'>
                    <Card style={{ backgroundColor: '#ff978a' }}>
                        <Grid item className={classes.day}>
                            <Typography variant='h2' align='center'>VENERDÌ</Typography>
                            <Grid container direction='row' justify='center' alignItems='center'>

                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                            </Grid>
                        </Grid>
                    </Card>
                    <Card style={{ backgroundColor: '#fc5e1f' }}>
                        <Grid item className={classes.day} >
                            <Typography variant='h2' align='center'>SABATO</Typography>
                            <Grid container direction='row' justify='center' alignItems='center'>

                                <EventBox artistName='Riff' activityName='Concerto' startHour='21:00' endHour='23:00' />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                            </Grid>
                        </Grid>
                    </Card>
                    <Card style={{ backgroundColor: '#cb9d47' }}>
                        <Grid item className={classes.day}>
                            <Typography variant='h2' align='center'>DOMENICA</Typography>
                            <Grid container direction='row' justify='center' alignItems='center'>

                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                                <EventBox />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Container>
        </div>
    );
}

export default Days;