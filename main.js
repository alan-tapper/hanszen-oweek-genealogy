import { findDistance, findPath, getEveryone } from "./geneology.js"

var peopleList = document.getElementById("people")


var action = document.getElementById("action").value
var person1 = document.getElementById("person1name").value
var person2 = document.getElementById("person2name").value
var submit = document.getElementById("button")

submit.onclick = doStuff()

function doStuff() {
    console.log(action, person1, person2)
}