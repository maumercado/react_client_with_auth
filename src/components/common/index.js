import React from 'react';
import { reduxForm, Field } from 'redux-form';

const CustomReduxForm = props => {
    class CustomForm extends React.Component {
        render() {
            const { fields, handleSubmit, submitButtonText } = this.props;
            return (
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    {fields.map((formField, i) => renderField(formField, i))}
                    <button className="btn btn-primary" action="submit">
                        {submitButtonText}
                    </button>
                </form>
            );
        }
    }

    const renderField = (customField, i) => {
        return (
            <div key={i}>
                <Field
                    label={customField.label}
                    name={customField.name}
                    className={customField.className}
                    component={renderFieldComponent}
                    type={customField.type}
                />
            </div>
        );
    };

    const renderFieldComponent = field => {
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

    const WrappedForm = reduxForm({
        validate: props.validate,
        form: props.formName
    })(CustomForm);

    return <WrappedForm {...props} />;
};

export default CustomReduxForm;
