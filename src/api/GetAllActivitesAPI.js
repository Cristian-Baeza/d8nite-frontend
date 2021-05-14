const fetchActivities = async (token) => {
  try {
    let response = await fetch('https://d8nite-backend.herokuapp.com/d8nite/activities/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        // origin: 'http://localhost:3000/'
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
  fetchActivities
}