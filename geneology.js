import data from "./data.js"

var parentsOf = {}

//prints the parentsOf dictionary
function printParentsOf() {
    for (let child of Object.keys(parentsOf)) {
        console.log(child, parentsOf[child])
    }
}

//tree building functions

//adds a name with parents given by parentsList
function addPerson(source, parentList) {
    parentsOf[source] = parentList
}

//adds sibling as a sibling of refrence
function addSibling(sibling, source) {
    addPerson(sibling, parentsOf[source])
}

//adds the members of siblings as siblings of source
function addSiblings(siblings, source) {
    for (let sibling of siblings.entries()) {
        addSibling(sibling[1], source)
    }
}

//adds parent to source's list of parents
function addParent(parent, source) {
    parentsOf[source].push(parent)
}

//adds an entire O-Week Group
function addOWeekGroup(advisors, newStudents) {
    for (let ns of newStudents) {
        addPerson(ns, advisors)
    }
}

//builds the tree using data from the data.js file
for (let i in data) {
    addOWeekGroup(data[i][0], data[i][1])
}


//other helper functions

//returns the children of source
function getChildren(source) {
    var toReturn = []
    for (let name in parentsOf) {
        for (let i = 0; i < 4; i++) {
            if (source === parentsOf[name][i]) {
                toReturn.push(name)
            }
        }
    }
    return toReturn
}

//returns the parents of source
function getParents(source) {
    if (parentsOf[source]) {
        return parentsOf[source]
    }
    return []
}

//returns the cos of source
function getCos(source) {
    var toReturn = []
    for (let advisingTeam of Object.values(parentsOf)) {
        for (let i = 0; i < 4; i++) {
            if (source === advisingTeam[i]) {
                for (let j = 0; j < 4; j++) {
                    toReturn.push(advisingTeam[j])
                }
            }
        }
    }
    var toReturn2 = []
    for (let advisor of toReturn) {
        if (!toReturn2.includes(advisor) && advisor !== source) {
            toReturn2.push(advisor)
        }
    }
    return toReturn2
}

//returns the siblings of source
function getSiblings(source) {
    var toReturn = []
    if (getParents(source)) {
        for (let name of Object.keys(parentsOf)) {
            if (getParents(source) === getParents(name) && source !== name) {
                toReturn.push(name)
            }
        }
    }
    return toReturn
}

//returns a list of everyone in the tree
export function getEveryone() {
    var people = []
    for (let person of Object.keys(parentsOf)) {
        people.push(person)
    }
    for (let advisingTeam of Object.values(parentsOf)) {
        for (let i = 0; i < 4; i++) {
            if (!people.includes(advisingTeam[i])) {
                people.push(advisingTeam[i])
            }
        }
    }
    return people
}


//returns the immediate family of source
function getImmediateFamily(source) {
    return getChildren(source).concat(getParents(source), getCos(source), getSiblings(source))
}

//returns a list of everyone related to source in depth or less steps


//returns the average distance from everyone in tne network


//print functions

//prints everyone

//prints the immediate family of source
function printImmediateFamily(source) {
    for (let i of getImmediateFamily(source).values()) {
        console.log(i)
    }
}

//prints the number of relatives at every depth

//prints the relatives of source that are depth away or less

//prints the number of relatives of source that are depth away or less


//other

//finds the relation between name and source
function findRelation(name, source) {
    for (let parent of getParents(source)) {
        if (name === parent) {
            return "Parent"
        }
    }

    for (let child of getChildren(source)) {
        if (name === child) {
            return "Child"
        }
    }

    for (let sibling of getSiblings(source)) {
        if (name === sibling) {
            return "Sibling"
        }
    }

    for (let co of getCos(source)) {
        if (name === co) {
            return "Advised Together"
        }
    }
}

//returns the distances of everyone and their predecessor from the point of view of source
function BFSMap(source) {
    
    var q = []

    var dist = {}
    var predecessor = {}

    for (let person in getEveryone()) {
        dist[person] = null
        predecessor[person] = null
    }
    dist[source] = 0

    q.push(source)

    while (q.length > 0) {
        var u = q.shift()
        for (let i in getImmediateFamily(u)) {
            var v = getImmediateFamily(u)[i]
            if (!dist[v]) {
                dist[v] = 1 + dist[u]
                predecessor[v] = u
                q.push(v)
            }
        }
    }
    dist[source] = 0
    predecessor[source] = null
    
    var toReturn = {}
    for (let person of getEveryone()) {
        toReturn[person] = [dist[person], predecessor[person]]
    }

    return toReturn
}

//finds the shortest path from source to name
export function findPath(source, name) {
    var map = BFSMap(source)
    var path = [name]
    while (path[0] !== source) {
        path.unshift(map[path[0]][1])
    }

    return path
}

//finds the distance from source to name
export function findDistance(source, name) {
    var map = BFSMap(source)
    return map[name][0]
}

console.log(findDistance("Alan Tapper", ""))