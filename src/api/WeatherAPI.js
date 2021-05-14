const fetchWeather = async (zipcode) => {
  try {
    let response = await fetch(`https://d8nite-backend.herokuapp.com/d8nite/weather/${zipcode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json' 
      }
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // handle the error
    console.log('error found')
  }
}


export {
  fetchWeather
}