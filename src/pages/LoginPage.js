import React from 'react';
//COMPONENTS 
import LoginComponent from '../components/LoginComponent';

function LoginPage(props) {
  return (
    <div>
      <LoginComponent
        isLoggedIn={props.isLoggedIn}
        handleLogin={props.handleLogin}
      />
    </div>
  );
}

export default LoginPage;