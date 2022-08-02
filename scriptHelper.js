// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
   // Here is the HTML formatting for our mission target div.
   
             `   <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moon} </li>
                </ol>
                <img src="${image}">
  ` 
}

function validateInput(testInput) {

    if(testInput === ''){
        return "Empty"
    } 
   if(isNaN(testInput)){
        return "Not a number"
        
    }
    if(isNaN(testInput) === false){
        return "It's a number"
        
    }
    
    
    
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("hi")
    let status = document.getElementById("launchStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let pilotCheck = false;
    let copilotCheck = false;
    let fuelLevelCheck = false;
    let cargoLevelCheck = false;
    // let check = [pilot, copilot, fuelLevel, cargoLevel]
    // for(let i=0; i<check.length; i++) {
        if(validateInput(pilot.value === "Not a number")&& validateInput(pilot.value !== "Empty")) {
            console.log("1")
            pilotCheck = true;
            document.getElementById("pilotStatus").innerHTML =`pilot${pilot.value}Is ready to launch!`
        }else{
            let pilotStatus = pilotStatus + pilotName;
           alert(`${pilotName}is not ready for Launch`)
            alert("Pilot name not valid")
            
        
}
    if(validateInput(copilot.value === "Not a number")&& validateInput(copilot.value !== "Empty")) {
        console.log("hi")
        copilotCheck = true;
        document.getElementById("copilotStatus").innerHTML =`copilot${copilot.value}Is ready to launch!`
    }else{
        let pilotStatus = copilotStatus + copilotName;
           alert(`${copilotName}is not ready for Launch`)
        alert("Co-Pilot name not valid")
    }
    if(validateInput(fuelLevel.value === "It's a number")&& validateInput(fuelLevel.value !== "Empty")) {
        fuelLevelCheck = true;
        document.getElementById("fuelStatus").innerHTML =`fuelLevel${fuelLevel.value}Is good!`
    }else{
        alert("Insuffiencient Fuel!")
    
    }
    if(validateInput(fuelLevel.value > 10000 )){
        document.querySelector("faultyItems").style.visibility = "visible";
        status.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML = "Fuel level not sufficient for journey"
        document.getElementById("fuelStatus").style.color = "red"; 
          
    }
    if(validateInput(cargoLevel.value === "It's a number")&& validateInput(cargoLevel.value !== "Empty")) {
        cargoLevelCheck = true;
        document.getElementById("cargoStatus").innerHTML =`cargoLevel${cargoLevel.value}Is good!`
    }else{
        alert("Caution Check Cargo Level!")
    }};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()  });

    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random()*planets.length); 
   return planets[index];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
