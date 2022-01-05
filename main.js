import { findDistance, findPath, getEveryone } from "./geneology.js"

var action = document.getElementById("action")
var person1 = document.getElementById("person1name")
var person2 = document.getElementById("person2name")
var submit = document.getElementById("button")

submit.onclick = doStuff()

function doStuff() {
    console.log(action)
    console.log(person1)
    console.log(person2)
}