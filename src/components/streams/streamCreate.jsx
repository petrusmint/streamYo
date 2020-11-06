import React from 'react'
import { connect } from 'react-redux'

import { createStream } from '../../actions'
import StreamForm from './streamForm'

const StreamCreate = (props) => {
    const onSubmit = (formValues) => {
        props.createStream(formValues)
    }

    return (
        <div className="sixteen wide column">
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, { createStream })(StreamCreate)