
let swing = ["Ball", "Strike", "Single", "Double", "Triple", "Home Run", "Groundout", "Flyout"];
const renderEl = document.getElementById("render-el");
const newRandomHitEl = document.getElementById("newrandomhit-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


const welcomeEl = document.getElementById("welcome-el")

function greetUser() {
    welcomeEl.textContent = "Welcome back, Jackie!! 👋"    
}

function getOutcome() {
    for (let i = 0; i < swing.length; i++) {
       return swing[Math.floor(Math.random() * swing.length)]
    }
}


function finalOutcome() {
    if (getOutcome() === "Ball") {
        console.log("Ball")
    } else if (getOutcome() === "Strike") {
        console.log("Strike")
    } else if (getOutcome() === "Single") {
        console.log("Single")
    } else if (getOutcome() === "Double") {
        console.log("Double")
    } else if (getOutcome() === "Triple") {
        console.log("Triple")
    } else if (getOutcome() === "Home Run") {
        console.log("Home Run")
    } else if (getOutcome() === "Groundout") {
        console.log("Groundout")
    } else if (getOutcome() === "Flyout"){
        console.log("Flyout")
    }
}

function opponentTurn() {
    let runsScored = [0, 1, 2];
    for (let i = 0; i < runsScored.length; i++) {
        return runsScored[Math.floor(Math.random() * runsScored.length)]
     }
}

function opponentOutcome() {
    if (opponentTurn() === 0) {
        console.log("No runs scored")
    } else if (opponentTurn() === 1) {
        console.log("One runs scored")
    } else if (opponentTurn() === 2) {
        console.log("Two runs scored")
}
}

const addPlayer = (firstName, lastName, age) => {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player)
};




  class Player {
      constructor(name) {
          this._name = name
          this._battingAverage = battingAverage
          this._OBP = OBP
          this._isAtBat = false
          this._hits = []
      }
      get name () {
          return this._name
      }
      get battingAverage () {
          return this._battingAverage
      }
      get OBP () {
          return this._OBP
      }
      get isAtBat () {
          return this._isAtBat
      }
      get hits () {
          return this._hits
      }
      set hits(value) {
          this._hits = value
      }
      toggleAtBat() {
        this.isAtBat = !this.isAtBat
      }
  }
