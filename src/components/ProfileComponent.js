import React, { useState } from 'react';
import TodoListComponent from '../components/TodoListComponent';
import CalendarComponent from '../components/CalendarComponent';
import ProfileCardComponent from './ProfileCardComponent';
import ProfilePlacesCardsComponent from './ProfilePlacesCardsComponent';
import ProfileWeatherComponent from './ProfileWeatherComponent';
// import { Card, CardDecks } from "reactstrap";

function ProfileComponent({ user, props }) {

  const [weather, setWeather] = useState(null);
  const [zipInput, setZipInput] = useState('')

   //handle zip
   const handleZip = (event) => {
    event.preventDefault();
    setZipInput(event.target.zipcode.value)
  }

  return (
    <div>
      <div className="profile-component" style={{ padding: '10vh' }}>
        <div className="profile-section">
          <div class="profile-container">
                <div class="grid-item">
                <h3> Your profile information</h3>
                { user &&
                  <p>Account: {user.username}</p>
                }
                <div className="profile-grid-container">
                  <div className="profile-grid-item">
                  <ProfileCardComponent />
                  </div>
                  
                 <ProfileWeatherComponent />
                  <CalendarComponent />
                   </div>
                <ProfilePlacesCardsComponent />
          </div>
        </div>
             


            </div>
          <div>
        </div>
      </div>
    </div>
   
  )
}

export default ProfileComponent