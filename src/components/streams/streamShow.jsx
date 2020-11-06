import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStream } from '../../actions'

const StreamShow = props => {
    useEffect(()=> {
        props.fetchStream(props.match.params.id)
    },[])

    console.log(props)

    if(!props.stream) {
        return <div className="sixteen wide column"><h3>Loading</h3></div>
    }

    const { title, description } = props.stream

    return (
        <div className="sixteen wide column">
            <h1>{ title }</h1>
            <h3>{ description }</h3>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)