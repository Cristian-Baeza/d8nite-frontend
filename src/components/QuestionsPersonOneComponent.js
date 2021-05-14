import React from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'
import { motion } from "framer-motion";


function QuestionsPersonOneComponent({ setIsFormSubmitted, personOneObject, setPersonOneObject }) {


  const handleQuestionFood = (event) => {
    event.preventDefault()
    let copyPersonOne = { ...personOneObject }
    copyPersonOne['food'] = JSON.parse(event.target.food.value)
    copyPersonOne['alcohol'] = JSON.parse(event.target.alcohol.value)
    copyPersonOne['entertainment'] = JSON.parse(event.target.entertainment.value)
    copyPersonOne['sports'] = JSON.parse(event.target.sports.value)
    copyPersonOne['adventure'] = JSON.parse(event.target.adventure.value)
    copyPersonOne['classes'] = JSON.parse(event.target.classes.value)

    setPersonOneObject(copyPersonOne)
    console.log(personOneObject)
    setIsFormSubmitted(1)
  }

  return (

    <div className="questions-component" style={{ padding: '20px' }}>
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
        <h3>PARTNER 1: TELL US YOUR WANTS</h3>
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
              <p className="questions-categorytitle">TAKE A CLASS?</p>
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
            <Button id='questions-submit-button' color="primary">Submit</Button>
          </motion.div>
        </Form>
      </div>
    </div>

  )
}

export default QuestionsPersonOneComponent