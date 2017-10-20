import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomReduxForm from '../common/CustomForm';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit = formProps => {
        this.props.signupUser(formProps);
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
            <div>
                <CustomReduxForm
                    formName="signup"
                    fields={this.generateFields()}
                    onSubmit={this.handleFormSubmit}
                    validate={validate}
                    submitButtonText="Sign Up!"
                />
            </div>
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

export default connect(null, actions)(Signup);
