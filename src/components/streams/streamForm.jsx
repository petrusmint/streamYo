import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderError = ({touched, error }) => {
    if(touched && error) {
        return (
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        )
    }
}

const renderInput = ({input, label, meta}) => {
    return (
        <div className="field">
            <label>{ label }</label>
            <input {...input} autoComplete="off" />
            { renderError(meta) }
        </div>
    )
}

const StreamForm = (props) => {
    const onSubmit = (formValues) => {
        props.onSubmit(formValues)
    }

    console.log(props)

    return (
        <div className="sixteen wide column">
            <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
                <Field name="title" component={renderInput} label="Enter Title" />
                <Field name="description" component={renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        </div>
    )
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.title) { errors.title = 'You must enter a title' }
    if(!formValues.description) { errors.description = 'You must enter a description' }

    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm)