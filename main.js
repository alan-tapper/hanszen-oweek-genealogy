import { findDistance, findPath, getEveryone } from "./geneology.js"

var peopleList = document.getElementById("people")

function doStuff() {

    var action = document.getElementById("action").value
    var person1 = document.getElementById("person1name").value
    var person2 = document.getElementById("person2name").value
  
    console.log([action, person1, person2])
    document.getElementById("person1display").innerHTML = action + " from " + person1 + " to " + person2
    document.getElementById("person1display").disabled = false
  }

//console.log(findPath("Alan Tapper", "Kian Robinson"))