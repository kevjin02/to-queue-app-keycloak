import React from "react";

/**
 * Creates header.
 * @returns  {object} - HTML footer with app name.
 */
function Header(props) {

    return (
      <header>
        <h1>
          toQueue
        </h1>
        <button className='sessionButton' onClick={props.login}>{props.loggedIn ? 'Log Out' : 'Login/Register' }</button>
      </header>
    );
  }
  
  export default Header;