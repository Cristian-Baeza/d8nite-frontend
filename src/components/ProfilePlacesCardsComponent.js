import React, {useState} from 'react'
import { CardDeck, Card } from 'react-bootstrap'

function ProfilePlacesCardsComponent(props) {

// Edit Image profile //
const[selectFile, setSelectFile] = useState([null]);

//imagefile 
function handleChange(event){
  const selectedFile = event.target.files[0];
}

function fileUpLoadHandler(){
  
}


  return (
    <div className="cards-profile-container">
      <h1> Places we've gone ...</h1>
 <CardDeck>
  <Card>
    <Card.Img variant="top" src="images/concert.png" />
    <Card.Body>
      <Card.Title>Summer 2019</Card.Title>
      <Card.Text>
        Free Concert at the Park. 
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️</p>
    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src="images/adventure.png" />
    <Card.Body>
      <Card.Title>Date with bestfriend</Card.Title>
      <Card.Text>
        Adventure 
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️</p>
    </Card.Body>
   
  </Card>



  <Card>
    <Card.Img variant="top" src="miller-images/eating.jpeg" />
    <Card.Body>
      <Card.Title>Little Sandwhich Shop</Card.Title>
      <Card.Text>
        A little bit overprice {' '}
      </Card.Text>
      <p>⭐️⭐️⭐️</p>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="miller-images/wine.jpeg" />
    <Card.Body>
      <Card.Title>Wine Tasting</Card.Title>
      <Card.Text>
        Yummy Wine!
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    </Card.Body>
  </Card>
</CardDeck>


<CardDeck>
  <Card>
    <Card.Img variant="top" src="miller-images/coffee.jpeg" />
    <Card.Body>
      <Card.Title>Coffee</Card.Title>
      <Card.Text>
        Live music playing 
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src="miller-images/camping2.png" />
    <Card.Body>
      <Card.Title>Camping with the Fam.</Card.Title>
      <Card.Text>
        Camping was fun very relaxing just a long ride. 
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src="miller-images/dinner4.jpg" />
    <Card.Body>
      <Card.Title>Date Night</Card.Title>
      <Card.Text>
        Aniversary Dinner{' '}
        <p>⭐️⭐️⭐️⭐️⭐️</p>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="miller-images/dinner3.jpg" />
    <Card.Body>
      <Card.Title>Wine Tasting</Card.Title>
      <Card.Text>
        Yummy Wine! Again!
      </Card.Text>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    </Card.Body>
  </Card>
</CardDeck>









    </div>
  )
}

export default ProfilePlacesCardsComponent
