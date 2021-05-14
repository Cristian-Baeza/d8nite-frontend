const addDate = (dateObject, token) => {
  return fetch(' https://d8nite-backend.herokuapp.com/d8nite/dates/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(dateObject)
  }).then(res => res)
}

const fetchDates = async (token) => {
  try {
    let response = await fetch('https://d8nite-backend.herokuapp.com/d8nite/dates/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // handle the error
    console.log('error found')
  }
}

export{addDate, fetchDates}