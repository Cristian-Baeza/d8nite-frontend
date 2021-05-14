
const signupUser = (userObject) => {
  return fetch(' https://d8nite-backend.herokuapp.com/d8nite/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const login = (userObject) => {
  return fetch(' https://d8nite-backend.herokuapp.com/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch('https://d8nite-backend.herokuapp.com/d8nite/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

export {
  login,
  getLoggedInUser,
  signupUser
}