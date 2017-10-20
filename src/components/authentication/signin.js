import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import CustomReduxForm from '../common/CustomForm';

class Signin extends Component {
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
            }
        ];
    };

    handleFormSubmit = ({ email, password }) => {
        this.props.signinUser({ email, password }, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        return (
            <div>
                <CustomReduxForm
                    formName="signin"
                    validate={validate}
                    fields={this.generateFields()}
                    onSubmit={this.handleFormSubmit}
                    submitButtonText="Sign In"
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

    return errors;
};

export default connect(null, actions)(Signin);
