import { findDistance, findPath, getEveryone } from "./geneology.js"

var peopleList = document.getElementById("people")


var action = document.getElementsById("action").value
var person1 = document.getElementByName("person1name").value
var person2 = document.getElementByName("person2name").value
var submit = document.getElementById("button")

submit.onclick = doStuff()

function doStuff() {
    console.log(action)
    console.log(person1)
    console.log(person2)
    console.log("Pressed")
    document.getElementById("person1display").innerHTML = person1
    document.getElementById("person2display").innerHTML = person2
}

console.log(findPath("Alan Tapper", "Kian Robinson"))