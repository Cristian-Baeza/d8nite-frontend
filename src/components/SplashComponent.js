import React from 'react';
import { Button, UncontrolledCarousel } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const items = [
  {
    key: '1',
    src: "Miller-Images/mountain.jpeg",
    
  },
  {
    key: '2',
    src: "Miller-Images/bench.jpeg",
    
  },
  {
    key: '3',
    src: "Miller-Images/beach.jpeg",
    
  },
  {
    key: '4',
    src: "Miller-Images/camping.jpeg",
    
  },
  {
    key: '5',
    src: "Miller-Images/happy.jpeg",
    
  },
  {
    key: '6',
    src: "Miller-Images/coffee.jpeg",
    
  },
  {
    key: '7',
    src: "Miller-Images/book.jpeg",
    
  },
  {
    key: '8',
    src: "Miller-Images/cliffpicnic.jpeg",
    
  },
  {
    key: '9',
    src: "Miller-Images/walking.jpeg",
    
  },
  {
    key: '10',
    src: "Miller-Images/wine.jpeg",
    
  }


];


const SplashComponent = (props) => {
  return (

    <div className="container-page">
      
        <div>
          <img className="header-splash"
            src="/images/logo.png"
            width="auto"
            height="100"
            alt="D8Nite Logo"/>
          
        <div className="splash-btn-sign-in">
          <span className="splash-sign-in-text">Already have an account?</span>
          <Button color="dark"><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Sign In</Link></Button>
        </div>
      </div>
    

      <div className="about-header">
        
          <h1 className="top-text-heading">Couples Deserve Better</h1>
        
        <div className="paragraph-div">
          <p>
            On D8Nite, you're more than just a boring ol' couple. You already found the perfect partner, let us help you plan the perfect date!
          </p>
        </div>
      </div>
      
      <div className="splash-btn-join">
        <Button color="dark" size="lg"><Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Join D8Nite</Link></Button>
      </div>

      <div id="car">
        <UncontrolledCarousel className="carousel-fade" items={items} indicators={false} controls={false} autoplay={true} />
      </div>
    </div>


  );

}
export default SplashComponent;





