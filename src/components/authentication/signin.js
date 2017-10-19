import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
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

    handleFormSubmit = ({ email, password }) => {
        this.props.signinUser({ email, password }, () => {
            this.props.history.push('/feature');
        });
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
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">
                    Sign In
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

    return errors;
};

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
};

export default reduxForm({
    validate,
    form: 'signin',
    fields: ['email', 'password']
})(connect(mapStateToProps, { signinUser })(Signin));
