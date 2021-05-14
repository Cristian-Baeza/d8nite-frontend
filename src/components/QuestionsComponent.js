import React from 'react';
import QuestionsPersonTwoComponent from './QuestionsPersonTwoComponent';
import QuestionsPersonOneComponent from './QuestionsPersonOneComponent';
import DateResultsComponent from './DateResultsComponent';
import { motion } from "framer-motion";



// import {FormGroup, Col, Label, Input, Form, Button} from 'react-bootstrap';

function QuestionsComponent({ isFormSubmitted, setIsFormSubmitted, personOneObject, setPersonOneObject, personTwoObject, setPersonTwoObject }) {

  let componentToRender;

  if (isFormSubmitted === 0) {
    componentToRender =

      <QuestionsPersonOneComponent
        setIsFormSubmitted={setIsFormSubmitted}
        personOneObject={personOneObject}
        setPersonOneObject={setPersonOneObject}
      />
  } else if (isFormSubmitted === 1) {
    componentToRender =

      <QuestionsPersonTwoComponent
        personTwoObject={personTwoObject}
        setPersonTwoObject={setPersonTwoObject}
        setIsFormSubmitted={setIsFormSubmitted}
      />

  } else if (isFormSubmitted === 2) {
    componentToRender =
      <DateResultsComponent
        personTwoObject={personTwoObject}
        personOneObject={personOneObject}
      />
  }

  return (
    <div>

      {componentToRender}


    </div>
  );
}

export default QuestionsComponent;