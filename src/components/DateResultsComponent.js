import React, { useEffect, useState } from 'react';
import { fetchActivities } from '../api/GetAllActivitesAPI';
import IndividualResultComponent from './IndividualResultComponent.js';
import WeatherDisplayedComponent from '../components/WeatherDisplayedComponent'
import { motion } from "framer-motion";


function DateResultsComponent({ personOneObject, personTwoObject }) {


  const [results, setResults] = useState([])
  const [zipInput, setZipInput] = useState('')

  //handle zip
  const handleZip = (event) => {
    event.preventDefault();
    setZipInput(event.target.zipcode.value)
  }


  //Finds the matching categories where both are true. Assigns them to matchingCategoriesObject
  let matchingCategoriesObject = {}
  const logMatchingKeyPairs = (personOneObject, personTwoObject) => {
    for (const [key, value] of Object.entries(personOneObject)) {
      if (value) {
        if (personTwoObject[key] === true) {
          matchingCategoriesObject[key] = true;
        }
        //   else{
        //     outputObj[key] = false;
        //   }
      }
      // else{
      //   outputObj[key] = false;
      // }
    }

    // console.log(matchingCategoriesObject)
  }


  let arrayOfResults = []

  const getAllMatchingActivities = async () => {
    let allActivities = await fetchActivities(localStorage.getItem("auth-user"));

    //finds all activities in the db that match AT LEAST ONE of the couples matching categories. It does NOT find activities that fit ALL of the matches. 
    for (let i = 0; i < allActivities.length; i++) {
      // console.log(allActivities[i])
      let isMatched = false;
      for (const [key, value] of Object.entries(matchingCategoriesObject)) {
        if (isMatched === false) {
          if (allActivities[i][key] === true) {
            // console.log(allActivities[i])
            arrayOfResults.push(allActivities[i])
            isMatched = true
          }
        }
      }
    }
    // console.log(arrayOfResults)
    let copyOfArray = { ...arrayOfResults }
    let finalResultsArray = Object.values(copyOfArray)
    setResults(finalResultsArray)
  }



  useEffect(() => {
    logMatchingKeyPairs(personOneObject, personTwoObject);
  }, [])

  useEffect(() => {
    getAllMatchingActivities();
  }, [])



  const mapResults = (array) => {
    // console.log(results)
    return (
      array.map((each, index) => {
        return (
          <IndividualResultComponent
            result={each}
            zipInput={zipInput}
          />
        )
      })
    )
  }

  // const logState = () => {
  //   console.log(results)
  // }


  return (
    <div className='date-results'>
      <h2>MATCHES:</h2>
      <div id="recommend-message">
        <br />

        <WeatherDisplayedComponent
          handleZip={handleZip}
        />
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          x: 0,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }} >
        <div className='parent-div-individual-result'>
          {mapResults(results)}
        </div>
      </motion.div>


    </div>
  );
}

export default DateResultsComponent;