import React from 'react'
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'
import { motion } from "framer-motion";

function QuestionsPersonTwoComponent({ personTwoObject, setPersonTwoObject, setIsFormSubmitted }) {



  const handleQuestionFood = (event) => {
    event.preventDefault();
    let copyPersonTwo = { ...personTwoObject };
    copyPersonTwo['food'] = JSON.parse(event.target.food.value)
    copyPersonTwo['alcohol'] = JSON.parse(event.target.alcohol.value)
    copyPersonTwo['entertainment'] = JSON.parse(event.target.entertainment.value)
    copyPersonTwo['sports'] = JSON.parse(event.target.sports.value)
    copyPersonTwo['adventure'] = JSON.parse(event.target.adventure.value)
    copyPersonTwo['classes'] = JSON.parse(event.target.classes.value)

    setPersonTwoObject(copyPersonTwo)
    console.log(personTwoObject)
    setIsFormSubmitted(2)
  }

  return (

    <div className="questions-component" style={{ padding: '20px' }}>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: 0,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }} >
        <h3>PARTNER 2: TELL US YOUR NEEDS</h3>
      </motion.div>
      <div className="questions-form">

        <Form onSubmit={handleQuestionFood}>
          <div class="questions-grid-container">

            <div class="questions-grid-item">
              <p className="questions-categorytitle">FOOD AVAILABLE?</p>
              <img src="images/dinner-table.png" alt="dinner-table" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="food" id="food" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="food" id="food" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>

            <div class="questions-grid-item">
              <p className="questions-categorytitle">ALCOHOL AVAILABLE?</p>
              <img src="/images/bar.png" alt="bar" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="alcohol" id="alcohol" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="alcohol" id="alcohol" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>

            <div class="questions-grid-item">
              <p className="questions-categorytitle">BE ENTERTAINED?</p>
              <img src="/images/stage.png" alt="concert" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="entertainment" id="entertainment" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="entertainment" id="entertainment" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>

            <div class="questions-grid-item">
              <p className="questions-categorytitle">BE ACTIVE?</p>
              <img src="/images/american-football.png" alt="sports" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sports" id="sports" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sports" id="sports" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>

            <div class="questions-grid-item">
              <p className="questions-categorytitle">BE ADVENTUROUS?</p>
              <img src="/images/hot-air-balloon.png" alt="adventure" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="adventure" id="adventure" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="adventure" id="adventure" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>

            <div class="questions-grid-item">
              <p className="categorytitle">TAKE A CLASS?</p>
              <img src="/images/art.png" alt="class" />
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="classes" id="classes" value="true" />{' '} YES
                  </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="classes" id="classes" value="false" />{' '} NO
                  </Label>
              </FormGroup>
            </div>
          </div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }} >

            <Button id='questions-submit-button' color="primary">Submit </Button>
          </motion.div>
        </Form>
      </div>
    </div>

  )
}

export default QuestionsPersonTwoComponent