import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import LogData from '../Comps/regLogData';
import ArtDetails from '../Comps/regArtDetails';
import RegConfirm from '../Comps/regConfirm';
import RegSuccess from '../Comps/regSuccess';

export class RegisterForm extends Component {
    state = {
        step: 1,
        userName: '',
        email: '',
        phone: '',
        bio: '',
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    render() {
        const { step } = this.state;
        const { userName, email, phone, bio } = this.state;
        const values = { userName, email, phone, bio }
        switch (step) {
            case 1://Log Data
                return (
                    <LogData
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
                break;
            case 2://Art Details
                return (
                    <ArtDetails />
                )
                break;
            case 3://Confirm
                return (
                    <RegConfirm />
                )
                break;
            case 4://Success
                return (
                    <RegSuccess />
                )
                break;
        }
    }
}

export default RegisterForm;