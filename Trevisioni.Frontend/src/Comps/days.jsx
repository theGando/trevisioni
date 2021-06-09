import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import EventBox from '../Comps/eventBox';

function Days(eventProps) {
    const classes = useStyles();
    return (
        <div style={{ marginBottom: '50px' }}>
            <center>
                <Container>
                    <Grid container spacing={4} direction='row' justify='space-around' alignItems='center'>
                        <Card style={{ backgroundColor: '#ff978a' }} className={classes.day}>
                            <Grid item>
                                <Typography variant='h2' align='center'>VENERDÌ</Typography>
                                <Grid container direction='column' justify='center' alignItems='center'>

                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                </Grid>
                            </Grid>
                        </Card>
                        <Card style={{ backgroundColor: '#fc5e1f' }} className={classes.day}>
                            <Grid item>
                                <Typography variant='h2' align='center'>SABATO</Typography>
                                <Grid container direction='column' justify='center' alignItems='center'>

                                    <EventBox artistName='Riff' activityName='Concerto' startHour='21:00' endHour='23:00' />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                    <EventBox />
                                </Grid>
                            </Grid>
                        </Card>
                        <Card style={{ backgroundColor: '#cb9d47' }} className={classes.day}>
                            <Grid item>
                                <Typography variant='h2' align='center'>DOMENICA</Typography>
                                <Grid container direction='column' justify='center' alignItems='center'>

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
            </center>
        </div>
    );
}

export default Days;