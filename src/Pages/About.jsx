import React from 'react';
import { Container, Grid, Typography } from "@material-ui/core";
import logo from '../TreviLogo.png';

function About() {
    return (
        <div style={{ marginTop: '150px', marginBottom: 300 }}>
            <center>
                <Container maxWidth="s" align='center'>
                    <Typography variant='h1' align='center' style={{ display: 'inline-block' }}>
                        CHI SIAMO
                    </Typography>
                </Container>
                <Container style={{ maxWidth: 1000, minHeight: 200, display: 'inline-block' }} >

                    <img src={logo} style={{ maxWidth: '40%', minWidth: 150 }} />

                    <Typography variant='h5' style={{ maxWidth: 600 }}>
                        UN WEEKEND DI MUSICA, ARTE, CULTURA, LABORATORI PER
                        GRANDI E PICCINI , DIBATTI, POESIA, TEATRO E…. MOLTO
                        ALTRO ANCORA!
                                </Typography>

                </Container>
                <Container style={{ marginTop: 100, maxWidth: '80%', minWidth: 300 }}>
                    <Typography variant='subtitle1' align='justify' paragraph>
                        Ciao Treviso! Siamo un gruppo di ragazzi e ragazze appassionati d’arte e crediamo moltissimo nelle
                        potenzialità inespresse dei giovani artisti della nostra città. Da questo amore e questa convinzione,
                        ormai tre anni fa, abbiamo deciso di dare vita al festival TREVISIONI.<br /><br />
                        TREVISIONI è un evento artistico-culturale nato dalla necessità di creare un punto di riferimento
                        per tutti i giovani artisti del territorio, in modo da favorirne la reciproca conoscenza e stimolare
                        una collaborazione che potesse far emergere i loro talenti. Il festival, ad ingresso gratuito, è
                        organizzato tramite il bando 1630 del Comune di Treviso in collaborazione con Progetto Giovani.
                        Quest’anno si terrà dal 27 al 29 agosto al Parco degli Alberi Parlanti in Villa Margherita (viale
                        Felissent 56).<br /><br />
                        L'elemento caratterizzante del festival è la volontà di promuovere l’arte nel senso più ampio del
                        termine, motivo per cui il programma comprende ogni forma d'arte (pittura, scultura, fotografia,
                        musica, cinema, teatro ecc..). Ad ogni categoria artistica vi è dedicato un luogo o un tempo: le opere
                        d’arte visive verranno esposte all'interno dell'esedra del parco mentre le arti performative saranno
                        ospitate nella zona palco.<br /><br />
                        Le “tre visioni” che proponiamo consistono in tre eventi serali diversi tra loro: venerdì sera
                        ospiteremo un cinema all’aperto, sabato musica dal vivo e domenica performance di teatro,
                        poesia e danza. A contornare gli eventi principali ci saranno dibattiti, laboratori, mostre-mercato
                        etc. Il target del festival spazia dai ragazzi più giovani fino alle famiglie, vista l'eterogeneità nei
                        contenuti e degli eventi proposti.
                    </Typography>
                </Container>
            </center>
        </div >
    )
}

export default About;