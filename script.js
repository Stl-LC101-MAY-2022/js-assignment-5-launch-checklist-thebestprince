// Write your JavaScript code here!

// const { myFetch, pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {
    console.log("Click button")
    
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let form = document.getElementById("launchForm");
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function(event) {
        event.preventDefault()
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        //form.addEventListener("click",function(event){
 
     
       
         
        })
     
    



        form.addEventListener("submit",function(event){
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
            
            event.preventDefault()

           
    })
       
  

   

    });  