import React, { Component } from 'react'
import { AppBar, RaisedButton, TextField } from '@material-ui/core';

export class LogData extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div style={{ marginTop: '150px', marginBottom: 300 }}>
                <TextField
                    hintText='Inserisci Username'
                    floatingLabelText='Username'
                    onChange={handleChange('userName')}
                    defaultValue={values.userName}
                />
            </div>
        )
    }
}

export default LogData
