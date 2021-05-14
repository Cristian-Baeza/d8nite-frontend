import React, {useState} from 'react';
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { fetchWeather } from '../api/WeatherAPI';

function ProfileWeatherComponent(props) {
 // Weather //
 const [weather, setWeather] = useState(null);

 const handleWeather = async (e) => {
   e.preventDefault();
   let response = await fetchWeather(e.target.zipcode.value);
   setWeather(response)
   
 }


  return (
    <div className="weather-header">
      <h1> Lets Check the weather: </h1>
          <img className="weather-icon" src="images/sun (1).png" />
              <div class="calendar-container">

              <form onSubmit={handleWeather}>
                <p>Enter your zip:</p>
                <input type='text' placeholder="Zip Code" name="zipcode" />
                <input type='submit' />
              </form>

                
                {weather &&
                  <div>
                    <p>Current weather: <b>{weather.weather[0].main}</b></p>
                    <p>Current Temperature  {weather.main.temp}°f </p>
                    <p>Feels like:  {weather.main.feels_like}°f </p>
                  </div>
                }
              </div>
    </div>
  );
}

export default ProfileWeatherComponent;