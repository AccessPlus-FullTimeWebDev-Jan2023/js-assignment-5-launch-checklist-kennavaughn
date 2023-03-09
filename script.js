// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    this.event.preventDefault(); 
      let pilotStatus = 'Pilot ${pilot} is ready for launch';
      let copilotStatus = 'Co-pilot ${copilot) is ready for launch';
    let fuelStatus =  validateInput(fuelLevel);
    let cargoLevel = validateInput(cargoLevel);
    
    };
    if (fuelStatus === "Is a Number" && fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = pilotStatus;
        document.getElementById("copilotStatus").innerHTML = copilotStatus;
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    } else  if (cargoStatus === "Is a Number" && cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = pilotStatus;
        document.getElementById("copilotStatus").innerHTML = copilotStatus;
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "green";

    } else{
        this.alert("Please enter valid information for all fields");
       
}
});
