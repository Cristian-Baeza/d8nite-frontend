import React, { useState } from 'react';
import { fetchPlacesByKeyword } from '../api/MapsAPI';
import { fetchBreweries, fetchRestaurants } from '../api/FoodAndDrinkAPI';
import { Button } from 'reactstrap';





function IndividualResultComponent(props) {

  const [placesByKeyword, setPlacesByKeyword] = useState([])
  const [breweriesByZip, setBreweriesbyZip] = useState([])
  const [restaurantsByZip, setRestaurantsByZip] = useState([])


  ///////////// METHODS
  const showGooglePlaces = async (zipcode, keyword) => {
    let response = await fetchPlacesByKeyword(zipcode, keyword);
    // console.log(response.results);
    setPlacesByKeyword(response.results.slice(0, 4));
    // console.log(placesByKeyword)
  }

  const showBreweries = async (zipcode) => {
    let response = await fetchBreweries(zipcode);
    // console.log(response)
    setBreweriesbyZip(response)
    // console.log(breweriesByZip)
  }


  const showRestaurants = async (zipcode) => {
    let response = await fetchRestaurants(zipcode);
    // console.log(response.businesses);
    setRestaurantsByZip(response.businesses.slice(0, 4));
    // console.log(restaurantsByZip)
  }


  return (
    <div className='individual-result'>


      <h1>{props.result.name.toUpperCase()}</h1>
      {/* <h3>{props.result.description.toUpperCase()}</h3> */}

      {//If breweries
        props.result.name === 'Brewery' ?
          <div className="local-options">

            {props.zipInput
              &&
              <div style={{ display: 'flex', marginTop: '-8px' }} className="local-options">
                {/* <p>Local Options:</p> */}
                <Button color='danger' onClick={() => showBreweries(props.zipInput)}>SHOW</Button>
              </div>
            }
            {
              breweriesByZip.map((each, index) => {
                return (
                  <div className='individual-name-address'>
                    <p className='name'>{each.name}</p>
                    <p className='address'>{each.street}</p>
                    <p className='number'>{each.phone}</p>
                  </div>
                )
              })
            }
          </div>


          //If restaurants
          : props.result.name === 'Restaurant' ?
            <div className="local-options">

              {props.zipInput
                &&
                <div style={{ display: 'flex', marginTop: '-8px' }} >
                  {/* <p>Local Options:</p> */}
                  <Button color='danger' onClick={() => showRestaurants(props.zipInput)}>SHOW</Button>
                </div>
              }
              {
                restaurantsByZip.map((each, index) => {
                  return (
                    <div className='individual-name-address' >
                      <p className='name'>{each.name}</p>
                      <p className='address'>{each.location.address1}</p>
                      <p className='number'>{each.phone}</p>
                    </div>
                  )
                })
              }
            </div>



            //everything else
            :
            <div className="local-options">
              {props.zipInput
                &&
                <div style={{ marginTop: '-8px' }} >
                  {/* <p>Local Options:</p> */}
                  <Button color="danger" onClick={() => showGooglePlaces(props.zipInput, props.result.name)}>SHOW</Button>
                </div>

              }
              {
                placesByKeyword.map((each, index) => {
                  return (
                    <div className='individual-name-address'>
                      <p className='name'>{each.name.toUpperCase()}</p>
                      <p className='address'>{each.formatted_address.toUpperCase()}</p>
                    </div>
                  )
                })
              }
            </div>
      }

    </div>
  );
}

export default IndividualResultComponent;