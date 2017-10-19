import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
    renderField = field => {
        return (
            <fieldset className="form-group">
                <label>{field.label}</label>
                <input
                    {...field.input}
                    type={field.type}
                    className={field.className}
                />
            </fieldset>
        );
    };

    handleFormSubmit = ({ email, password }) => {
        console.log(email, password);
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
                <button action="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
