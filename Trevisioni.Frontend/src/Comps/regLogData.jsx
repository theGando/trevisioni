import React, { Component } from 'react'
import { AppBar, Paper, RaisedButton, TextField } from '@material-ui/core';

export class LogData extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <TextField
                    hintText='Inserisci Username'
                    floatingLabelText='Username'
                    onChange={handleChange('userName')}
                    defaultValue={values.userName}
                /><br />
                <TextField
                    hintText='Inserisci Email'
                    floatingLabelText='Email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                /><br />
                <TextField
                    hintText='Inserisci Telefono'
                    floatingLabelText='Telefono'
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                />
            </React.Fragment>
        )
    }
}

export default LogData
