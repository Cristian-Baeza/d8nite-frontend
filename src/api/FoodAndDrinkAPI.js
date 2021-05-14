
const BASE_URL = "https://d8nite-backend.herokuapp.com/d8nite/"

// Helper method
async function tryCatchFetch(url, init) {
  try {
    let response = await fetch(url, init)
    let data = await response.json()

    if (!response.ok) {
      let error = {
        status: response.status,
        statusText: response.statusText,
        message: data
      }
      throw (error)
    }
    return data
  }
  catch (error) {
    console.error(error)
    return null
  }
}

// Returns breweries obtained from backend
async function fetchBreweries(zip) {
  return await tryCatchFetch(BASE_URL + `breweries/${zip}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON"
    }
  })
}

// Returns restaurants from yelp obtained from backend
async function fetchRestaurants(zip) {
  return await tryCatchFetch(BASE_URL + `restaurants/${zip}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON"
    }
  })
}

export { fetchBreweries, fetchRestaurants }
