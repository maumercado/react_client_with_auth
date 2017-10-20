import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import CustomReduxForm from '../common';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit = ({ email, password, passwordConfirm }) => {
        console.log(email, password, passwordConfirm);
    };

    generateFields = () => {
        return [
            {
                name: 'email',
                label: 'Email',
                type: 'text',
                className: 'form-control'
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password',
                className: 'form-control'
            },
            {
                name: 'passwordConfirm',
                label: 'Password Confirmation',
                type: 'password',
                className: 'form-control'
            }
        ];
    };

    render() {
        return (
            <CustomReduxForm
                formName="signup"
                fields={this.generateFields()}
                onSubmit={this.handleFormSubmit}
                validate={validate}
                submitButtonText="Sign Up!"
            />
        );
    }
}

const validate = values => {
    let errors = {};

    // validate inputs from values object
    if (!values.email) {
        errors.email = 'Enter your email!';
    }

    if (!values.password) {
        errors.password = 'Enter your password!';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Enter a password confirmation!';
    }

    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm =
            "Password and password confirmation don't match!";
    }

    return errors;
};

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.error
    };
};

export default connect(mapStateToProps)(Signup);
