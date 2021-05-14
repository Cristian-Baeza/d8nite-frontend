import React, { useState, useEffect } from 'react';
//MODULES IMPORTS
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//API IMPORTS
import { getLoggedInUser, login } from './api/UserAPI';

//PAGE IMPORTS
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import SplashPage from './pages/SplashPage';
import ProfilePage from './pages/ProfilePage';
import AddActivityPage from './pages/AddActivityPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import FooterComponent from './components/FooterComponent'
import ResourcesPage from './pages/ResourcesPage';




function App() {

  /////////////////////STATE

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])


  ///////////////////// METHODS

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    console.log(data)
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  /////////////// RENDER COMPONENTS that we pass props down too //////

  const renderLoginPage = () => {
    return (
      <LoginPage
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
      />
    )
  }

  const renderHomePage = () => {
    return (
      <HomePage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogout={handleLogout}
      />
    )
  }

  const renderProfilePage = () => {
    return (
      <ProfilePage
        user={user}
      />
    )
  }

  const renderResourcesPage = () => {
    return (
      <ResourcesPage
        isLoggedIn={isLoggedIn}
        user={user}
      />
    )
  }

  return (
    <div className="main-container">
      <Router>

        <Route exact path="/login" render={renderLoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" render={renderHomePage} />
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Route exact path="/profile" component={renderProfilePage} />
        <Route exact path="/addactivity" component={AddActivityPage} />
        <Route exact path="/resources" component={renderResourcesPage} />
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
