import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={ props.onDismiss } className="ui dimmer modals visible active">
            <div onClick={ e => e.stopPropagation() } className="ui standard modal visible active">
                <i onClick={ props.onDismiss } style={{top:'1.0535rem', right:'1rem', color:'rgba(0,0,0,.87)'}} className="close icon"></i>
                <div className="header">{ props.title }</div>
                <div className="content">{ props.content }</div>
                <div className="actions">
                    { props.actions }
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal