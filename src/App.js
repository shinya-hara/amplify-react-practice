import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App({ signOut }) {
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
            </header>
            <Button onClick={signOut}>Sign out</Button>
        </div>
    );
}

export default withAuthenticator(App);
