import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../TreviLogo.png';

function NavBar() {
    return (
        <AppBar position="fixed" style={{ backgroundColor: 'white', minHeight: '100px' }}>
            <Toolbar>
                <div>
                    <Link to='/'>
                        <Button><img src={logo} style={{ maxWidth: '90px', maxHeight: '90px' }} /></Button>
                    </Link>
                    <Link to='/about'>
                        <Button>CHI SIAMO</Button>
                    </Link>
                    <Link to='/gallery'>
                        <Button>GALLERIA</Button>
                    </Link>
                    <Link to='/registerform'>
                        <Button variant='contained'>Sei un artista? Registrati qui!</Button>
                    </Link>
                    <Link to='/login'>
                        <Button variant='contained'>LOGIN</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;