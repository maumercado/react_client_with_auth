import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    renderField = field => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <fieldset className={className}>
                <label>{field.label}</label>
                <input
                    {...field.input}
                    type={field.type}
                    className={field.className}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </fieldset>
        );
    };

    handleFormSubmit = ({ email, password, passwordConfirmation }) => {
        console.log(email, password, passwordConfirmation);
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                    type="text"
                    className="form-control"
                />
                <Field
                    label="Password"
                    name="password"
                    component={this.renderField}
                    type="password"
                    className="form-control"
                />
                <Field
                    label="Password Confirmation"
                    name="passwordConfirm"
                    component={this.renderField}
                    type="password"
                    className="form-control"
                />
                <button action="submit" className="btn btn-primary">
                    Sign up!
                </button>
            </form>
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

export default reduxForm({
    validate,
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm']
})(connect(mapStateToProps)(Signup));
