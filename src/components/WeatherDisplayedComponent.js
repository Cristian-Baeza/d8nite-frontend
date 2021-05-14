import React, { useState } from 'react';
import { fetchWeather } from '../api/WeatherAPI'
import { Button, Form, FormGroup, Input, Jumbotron } from 'reactstrap';

function WeatherDisplayedComponent(props) {
  const [weather, setWeather] = useState(null);

  const handleWeather = async (e) => {
    e.preventDefault();
    let response = await fetchWeather(e.target.zipcode.value);
    setWeather(response)
    props.handleZip(e)
  }


  return (
    <div id="weatherpane">
      <h3>ENTER ZIPCODE<br />FOR LOCAL PLACES &amp; WEATHER</h3>
      <br></br>
      <Form onSubmit={handleWeather} id="weather-form" inline>
        <FormGroup>
          <Input type="text" placeholder="Zip Code" name="zipcode" id='weather-input' />
          <Button type="submit" color='danger'>
            Submit
          </Button>
        </FormGroup>
      </Form>
      <br></br>
      {weather &&
        <div >
          <p id="weather-word">{weather.weather[0].main}!</p>
          <div className='temperature-results'>
            <p id="temperature">{Math.floor(weather.main.temp)}°f </p>
            <img className="weather-icon-results" src="images/sun (1).png" alt='cloud' />
          </div>
        </div>
      }

    </div>

  );
}

export default WeatherDisplayedComponent;
