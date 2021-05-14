const addActivity = (activtyObject, token) => {
  return fetch(' https://d8nite-backend.herokuapp.com/d8nite/activities/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(activtyObject)
  }).then(res => res)
}


export {
  addActivity
}