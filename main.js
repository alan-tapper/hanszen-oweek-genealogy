import { findDistance, findPath, getEveryone } from "./geneology.js"

var peopleList = document.getElementById("people")


var action = document.getElementById("action").value
var person1 = document.getElementsByName("person1name").value
var person2 = document.getElementsByName("person2name").value
var submit = document.getElementById("submit")

function doStuff() {
    console.log(action)
    console.log(person1)
    console.log(person2)
    console.log("Pressed")

    document.getElementById("person1display").innerHTML = person1
    document.getElementById("person1display").disabled = false

    document.getElementById("person2display").innerHTML = person2
    document.getElementById("person2display").disabled = false

    document.getElementById("actiondisplay").innerHTML = action
    document.getElementById("actiondisplay").disabled = false

    document.getElementById("pathdisplay").innerHTML = findPath("Alan Tapper", "Kian Robinson")
    document.getElementById("pathdisplay").disabled = false
}

//console.log(findPath("Alan Tapper", "Kian Robinson"))