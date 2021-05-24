import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import StaticBox from './staticBox';

function StaticArt() {
    const classes = useStyles();
    return (
        <div style={{ marginBottom: '50px' }}>
            <Container>
                <Grid spacing={4} container direction='row' justify='center' alignItems='center' >
                    <Card style={{ backgroundColor: '#ff8100' }}>
                        <Grid item className={classes.day}>
                            <Typography variant='h2' align='center'>Stand</Typography>
                            <Grid container direction='row' justify='center' alignItems='center'>

                                <StaticBox />
                            </Grid>
                        </Grid>
                    </Card>
                    <Card style={{ backgroundColor: '#ff81ff' }}>
                        <Grid item className={classes.day} >
                            <Typography variant='h2' align='center'>Expo</Typography>
                            <Grid container direction='row' justify='center' alignItems='center'>

                                <StaticBox />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Container >
        </div>
    )
}

export default StaticArt;