// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

class Auth extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {}
        // Configure FirebaseUI.
        this.uiConfig = {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            // signInSuccessUrl: '/signedIn',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                // Avoid redirects after sign-in.
                signInSuccessWithAuthResult: (User) => this.props.signInSuccess(User),
            },
        }
    }
    
    render(){
        return (
            <div>
                <h1>Please log in for better usage</h1>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
}

export default Auth;