import React, { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

const GoogleAuth = (props) => {

    useEffect(()=> {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: '208046759135-fl78p19ehm8v6gcrq6ur1vr24eusj6la.apps.googleusercontent.com',
                scope: 'email'
            }).then((auth)=> {
                auth = gapi.auth2.getAuthInstance()
                onAuthChange(auth.isSignedIn.get(), auth)
                auth.isSignedIn.listen(onAuthChange)
            })
        })
    },[])

    const onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            props.signIn(gapi.auth2.getAuthInstance().currentUser.get().getId())
        } else {
            props.signOut()
        }
    }

    const onSignInClick = () => {
        return gapi.auth2.getAuthInstance().signIn()
    }

    const onSignOutClick = () => {
        return gapi.auth2.getAuthInstance().signOut()
    }

    const renderAuthButton = () => {
        switch (props.isSignedIn) {
            case null:
                return null
            case true:
                return (
                    <button className="ui red google button" onClick={onSignOutClick}>
                        <i className="google icon"/>
                        Sign Out
                    </button>
                )
            default:
                return (
                    <button className="ui red google button" onClick={onSignInClick}>
                        <i className="google icon"/>
                        Sign In with Google
                    </button>
                )
        }
    }

    return <h1>{renderAuthButton()}</h1>
}


const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps,{ signIn,signOut })(GoogleAuth)