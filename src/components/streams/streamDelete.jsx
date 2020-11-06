import React, { useEffect } from 'react'
import Modal from '../modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { connect } from 'react-redux'

import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = props => {
    useEffect(()=> {
        props.fetchStream(props.match.params.id)
    },[])
    
    const deleteStream = () => {
        props.deleteStream(props.match.params.id)
    }

    const actions = () => {
        return (
            <React.Fragment>
                <div onClick={deleteStream} className="ui negative button">Delete</div>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    const renderContent = () => {
        if(!props.stream) {
            return 'Are you sure to delete this stream'
        }

        return `Are you sure you want to delete the stream title : ${props.stream.title}`
    }

    return (
        <Modal 
            title="Delete Stream" 
            content={ renderContent() } 
            actions={ actions() }
            onDismiss={ () => history.push('/') }
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)