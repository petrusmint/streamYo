import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchStream, editStream } from '../../actions'
import StreamForm from './streamForm'

const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }, [])

    const onSubmit = (formValues) => {
        props.editStream(props.match.params.id,formValues)
    }

    if(!props.stream) {
        return <div className="sixteen wide column"><h3>Loading</h3></div>
    }

    return (
        <div className="sixteen wide column">
            <h3>Edit a Stream</h3>
            {/* Manual way */}
            {/* <StreamForm initialValues={{ title: props.stream.title, description: props.stream.description }} onSubmit={onSubmit}/> */}
            {/* Lodash way */}
            <StreamForm initialValues={_.pick(props.stream, 'title', 'description')} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)