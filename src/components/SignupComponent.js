import React from 'react';
// API IMPORT
import { signupUser } from '../api/UserAPI';

//CSS or ROUTER IMPORT
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';


const SignupComponent = (props) => {

  // Used to redirect user to page of our choice right after they sign up. 
  const history = useHistory();
  const routeChange = () => {
    const path = '/login';
    history.push(path);
  }

  // Method that calls the signupUser API call from backend. Creates a username and password object in the database. 
  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    console.log(data)
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      console.log('HITS REDIRECT')
      routeChange()
    }
  }


  return (
    <div className='signUpPage'>
      <div >
        <div className="list-inline-item">
          <img className="loginimg" src='images/tyler3.png' />
        </div>
        <div>
          <img className="logoimg" src='images/logo.png' />
        </div>
      </div>
      <div className="signup-component" style={{ padding: '20px' }}>
        <div className="signup-form">
          <h3>REGISTER</h3>
          <Form onSubmit={handleSignup} >
            <FormGroup>
              <Label for="email">Email: </Label>
              <Input type="email" name="username" id="username" placeholder='One email per couple!' required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password: </Label>
              <Input type="password" name="password" id="password" required />
            </FormGroup>
            &nbsp;&nbsp;
            {/* AFTER CLICK REDIRECTS TO /login PAGE */}
            <Button color="dark">REGISTER </Button>
            &nbsp; OR &nbsp;&nbsp;
          <Button color="danger"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>LOGIN HERE</Link></Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;