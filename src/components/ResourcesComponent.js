import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Jumbotron } from 'reactstrap';
import { fetchPlacesByKeyword } from '../api/MapsAPI';

function ResourcesComponent(props) {
  const [placesByKeyword, setPlacesByKeyword] = useState([])
  const [zipInput, setZipInput] = useState('')
  const [zipSearched, setZipSearched] = useState(false)

  const handleZip = (event) => {
    event.preventDefault();
    setZipInput(event.target.zipcode.value)
  }


  const handleBabysittingSearch = async (e) => {
    e.preventDefault();
    let response = await fetchPlacesByKeyword(e.target.zipcode.value, "Babysitting");
    setPlacesByKeyword(response)
    handleZip(e)
    setZipSearched(true)
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}><b>BABYSITTING</b></h3>
      <Jumbotron id="babysitting">
        <h3>Enter your zip code for local babysitting options!</h3>
        <br></br>
        <Form onSubmit={handleBabysittingSearch}>
          <Input type="text" placeholder="Zip Code" name="zipcode" />
          <Button type="submit">
            Submit
          </Button>
        </Form>

        <br></br>

        {zipSearched &&
          <div>
            <h5>Option One:</h5>
            <p>Babysitting Service Name: <b>{placesByKeyword.results[0].name}</b></p>
            <p>Address: {placesByKeyword.results[0].formatted_address}</p>
            <p>Rating (1-5): {placesByKeyword.results[0].rating}</p>
            <h5>Option Two:</h5>
            <p>Babysitting Service Name: <b>{placesByKeyword.results[1].name}</b></p>
            <p>Address: {placesByKeyword.results[1].formatted_address}</p>
            <p>Rating (1-5): {placesByKeyword.results[1].rating}</p>
          </div>
        }
      </Jumbotron>

    </div>
  );

}

export default ResourcesComponent;