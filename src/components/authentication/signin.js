import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomReduxForm from '../common';
import { signinUser } from '../../actions';

class Signin extends Component {
    renderAlert = () => {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
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
            <CustomReduxForm
                formName="signin"
                fields={this.generateFields()}
                onSubmit={this.handleFormSubmit}
                validate={validate}
                submitButtonText="Sign In"
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

    return errors;
};

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
};

export default connect(mapStateToProps, { signinUser })(Signin);
