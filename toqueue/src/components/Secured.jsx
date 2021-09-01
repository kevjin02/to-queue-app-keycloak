import React, {Component} from 'react';
import Keycloak from 'keycloak-js';
import App from './App';
import Footer from "./Footer";

class Secured extends Component {
    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false};

    }
    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
          this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
        this.logout = this.logout.bind(this);
      }

    logout() {
        this.state.keycloak.logout();
    }

    render() {
        
        if(this.state.keycloak) { 
            if(this.state.authenticated){ return (
                <div id="page-container">
                <header>
        <h1>
          toQueue
        </h1>
        <button className='sessionButton' onClick={this.logout}>Sign out</button> 
      </header>
                <App isAuth={this.state.authenticated} keycloak={this.state.keycloak}/> 
                <Footer />
                </div>
            );} else {return (<div id="page-container">
            <header>
        <h1>
          toQueue
        </h1>
        <button className='sessionButton'  onClick={this.login}>{this.state.authenticated ? 'Log Out' : 'Login/Register' }</button>
      </header>
            <Footer />
            </div>)}}
        else {return (<p className='signIn'>Loading Sign-In...</p>)}
    }
}

export default Secured;