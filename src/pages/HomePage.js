import React, { useState } from 'react';
import QuestionsComponent from '../components/QuestionsComponent';
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from '../components/FooterComponent';
import { Button } from 'reactstrap';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function HomePage({ isLoggedIn, user, handleLogout }) {

  const [isFormSubmitted, setIsFormSubmitted] = useState(0)
  const [personOneObject, setPersonOneObject] = useState({})
  const [personTwoObject, setPersonTwoObject] = useState({})


  return (
    <div className="homePage">
      <NavbarComponent />

      {
        user &&
        <div id="logout">
          <br></br>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }} >
            <h4>ACCOUNT: {user.username} <Button color='success' onClick={handleLogout}>LOGOUT</Button></h4>
          </motion.div>
          <br></br>
        </div>
      }

      {
        !isLoggedIn
          ?
          <div>
            {/* THIS IS WHAT USERS SEES IF THEY GO TO '/home' and are not logged in */}
            <br></br>
            <h1>You need to <Link to="/login">log in</Link> to use these features.</h1>
          </div>
          :
          <div>
            {/* THIS IS WHAT USER SEES IF THEY ARE LOGGED IN */}
            {/* RENDER COMPONENTS HERE */}
            <QuestionsComponent
              isFormSubmitted={isFormSubmitted}
              setIsFormSubmitted={setIsFormSubmitted}
              personOneObject={personOneObject}
              setPersonOneObject={setPersonOneObject}
              personTwoObject={personTwoObject}
              setPersonTwoObject={setPersonTwoObject}
            />
          </div>
      }

    </div>
  );
}

export default HomePage;