import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Days from '../Comps/days';
import StaticArt from '../Comps/staticArt';
import logo from '../TreviLogo.png';


function Home() {
    return (
        <div style={{ marginTop: '150px' }}>
            <main>
                <div style={{ marginBottom: '100px' }}>
                    <center >
                        <Container maxWidth="s" align='center'>
                            <img src={logo} style={{ width: '90%' }} />
                            <Typography variant="h4" align="center" color="textSecondary" paragraph>
                                Il festival dei fioi al parco dei fioi con l'Arte dei fioi<br /> Vi aspettiamo in Villa Margherita il 27 28 e 29 Agosto
                            </Typography>
                            <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                                Calendario Eventi
                            </Typography>
                        </Container>
                        <Days />
                        <StaticArt />
                    </center>
                </div>
            </main>
        </div>
    )
}
export default Home;