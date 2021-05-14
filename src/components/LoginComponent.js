import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';



const LoginComponent = ({ isLoggedIn, handleLogin }) => {

  if (isLoggedIn) {
    return <Redirect to='/home' />
  }

  return (
    <div className="signInPage">
      <div>
        <div className="sign-list-inline-item">
          <img className="login-logoimg" src='miller-images/mountain.jpeg' alt='logo' />
        </div>
        <div>
          <img className="sign-logoimg" src='images/logo.png' alt='alt-logo' />
        </div>
      </div>
      <div className="login-component" style={{ padding: '40px' }}>
        <div className="login-form">
          <h3 className="login-header"> Login</h3>
          <Form onSubmit={handleLogin} >
            <FormGroup>
              <Label for="email">Email: </Label>
              <Input type="email" name="username" id="username" placeholder='One email per couple!' required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password: </Label>
              <Input type="password" name="password" id="password" required />
            </FormGroup>
            &nbsp;&nbsp;
            <Button color="dark">Login</Button>
            &nbsp; OR &nbsp;&nbsp;
          <Button color="danger"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Sign Up</Link></Button>
          </Form>

        </div>
      </div>
    </div>

  );
}

export default LoginComponent;