
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

// Returns places obtained from backend by keyword and zip
async function fetchPlacesByKeyword(zip, keyword) {
  return await tryCatchFetch(BASE_URL + `maps/${zip}/${keyword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON"
    }
  })
}

export { fetchPlacesByKeyword }