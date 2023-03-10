// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(inputValue === ''){
        return 'Empty';
    } else if (isNaN(value)){
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const validationResults = {
        pilot: validateInput(pilot),
        copilot: validateInput(copilot),
        fuelLevel: validateInput(fuelLevel),
        cargoLevel: validateInput(cargoLevel)
    };
    if (
        validationResults.pilot === 'Empty' ||
        validationResults.copilot === 'Empty' ||
        validationResults.fuelLevel === 'Empty' ||
        validationResults.cargoLevel === 'Empty' ||
    ){
        document.querySelector('#launch-status').classList.remove('ready');
        document.querySelector('#launch-status').classList.add('not-ready');
        document.querySelector('#shuttle-status').innerHTML = ('Awaiting');
    }
}

// function to fetch planetary JSON
async function myFetch() {
    const url = "https://handlers.education.launchcode.org/static/planets.json";
    try {
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  // function to pick a random planet from a list
  function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
  }
  
  // function to update mission target div with planet data
  function addDestinationInfo(document, planet) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${planet.name}</li>
        <li>Diameter: ${planet.diameter}</li>
        <li>Star: ${planet.star}</li>
        <li>Distance from Earth: ${planet.distance}</li>
        <li>Number of Moons: ${planet.moons}</li>
      </ol>
      <img src="${planet.image}">
    `;
  }
  let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();

listedPlanetsResponse
  .then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  })
  .then(function () {
    console.log(listedPlanets);
    // Call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination
    let planet = pickPlanet(listedPlanets);
    addDestinationInfo(planet);
  });


// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
//     "name": "Mars",
//         "diameter": "6779 km",
//         "star": "Sol",
//         "distance": "225 million km from Earth",
//         "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
//         "moons": 2
// }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
