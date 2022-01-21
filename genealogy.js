var data = [
    //2021 O-Week Groups
    [["Alan Tapper", "Chloe Hur", "Leigh Gabriely", "Matthew Zamarripa (Baker)"], ["Connor Taylor", "Henry Cabrera", "Tony Tan", "Ray Xiang", "Max Kovalchick", "Katherine Jeng", "Yimo Wang", "Tanya Jain", "Gabrielle Allen", "Caroline Tanner"]],
    [["Katie Bablak", "Hope Moustakakis", "Anushka Agrawal", "John Cook (Will Rice)"], ["Nitin Reganti", "Warren Rose", "Laura Yee", "Karen Marquez", "Adara Toran", "Aryana Suhartono", "Darius Huang", "Emerson Coronel", "Mark Lopatofsky", "Esha Patel"]],
    [["Marc Armena", "Grace Kneidel (Brown)", "Khondker Salim", "Charlotte Cohen"], ["Natalie Byron", "Ava White", "Vy Luu", "Priya Tirumala", "David Kurp", "Daniel Stulski", "Taeho Choe", "Kausar Alkaderi", "Ai Bunchatheravate"]],
    [["Julia Englehardt (McMurtry)", "Anthony Guzzo", "Corey Donovan", "Sini Koivu"], ["Emily Pena", "Ellie Cha", "Darcey Lonsdale", "Nayna Nambiar", "Sara Price", "Joseph Flores", "Sam Sarver", "Suraj Chandramouli", "Noah Hight"]],
    [["Gia Braddock (Brown)", "Daniel Rothfusz", "Dylan DuCharme", "Mabel Tang"], ["Maddy Garrity", "Bella Bartos", "Adi Zytek", "Michelle Fox", "Yulin Lu", "Peter Reynolds", "Joseph Liu", "Liam Waite", "Ammar Siddiqi", "Brian Seo"]],
    [["Ben Murdoch (Lovett)", "Aaron Lin", "Sarah Kim", "Victoria Johns"], ["Crystal Unegbu", "Danika Li", "Daniela Covarrubias", "Lauren Hu", "Thara Venkateswaran", "Emery Engling", "Jonathan Seyoum", "Zarek Lu", "Arturo Rodriguez Lopez", "James Belanger"]],
    [["Sadie Siegel (Lovett)", "Madhu Venkatesalu", "Jarrett Prchal", "Arvind Ramesh"], ["Sarah Davidson", "Whitney Ball", "Jo Harikrishna", "Genesis Hahn", "Riya Pagilla", "Marcus Williams", "Lucas Newman", "Jordan Contreras", "Nikhil Samudrala", "Ken Chen"]],
    [["Temi Dada", "Alp Yakici", "Ridhi Gari", "Andrew Li"], ["Stephanie Agu", "Leora Maksoud", "Basma Bedawi", "Kaylah Patel", "Jiwon Han", "Brian Baskin", "Shihab Ahmed", "Kai Cowin", "Hari Gotluru", "Bill Nguyen"]],
    [["Praneel Joshi (Lovett)", "Amanda Mae Ashley", "Shawn Zheng", "Maanvi Thawani"], ["Hannah Son", "Priscilla Ibrahim", "Christina Wong", "Victoria Albanese", "Kenna Dixon", "Will Ramos", "Javi Milagro Caro", "Josh Yu", "Daniel Brown", "Melvin Zarghooni"]],
    [["Claire Xu", "Moses Glickman (Martel)", "McKenna Tanner", "Carlos Rivera"], ["Claire Brix", "Azhariya Ellis", "Lily Remington", "Hannah Kim", "Christy Deng", "Stephen Xu", "Jay Folmar", "Dillon Akerman", "Jonah Lubin", "Wyatt Cho"]],
    [["Jackie Wu", "Sara Mansfield", "Isabelle Scott", "Jose Oviedo"], ["Lillian Sims", "Emily Wu", "Alison Qiu", "Celeste Colato", "Dylan Grant", "Byron Hart", "Pablo Solano", "Chuck Wells", "David Zhu"]],
    [["Christa Westheimer (McMurtry)", "Valentina Osorio", "Bert Odinet", "Juan Rubio"], ["Angelina Puente-Perez", "Julia Hanson", "Laney Schewgman", "Anagha Alapati", "Michelle Pham", "Nathaniel Moriss", "Sebastian Molina", "Ben Montag", "Daniel Zhao"]],
    //2020 O-Week Groups
    [["Alp Yakici", "Amanda Mae Ashley", "Cole Ponsi (Will Rice)", "Tessa Schreiber"], ["Alan Tapper", "Brian Lee", "Marc Armena", "Noah Elzner", "Astra Burke", "Reece Lusich", "Valentina Osorio", "Hemish Thakkar", "Jun-Ha Jung"]],
    [["Mason Reece", "Radhika Patel", "Alizay Azeem (Wiess)", "Abby Webb"], ["Kian Robinson", "Alex Holzbach", "Anushka Agrawal", "Ella Price", "Tammy Feng", "Kelly Shang", "Yajing Hu", "Nora Han"]],
    [["Syed Shams", "Daniel Wang", "Sara Mansfield", "Cynthia Chen (Martel)"], ["Yuka Aoyama", "McKenna Tanner", "Arielle Sanford", "Maanvi Thawani", "Corey Donovan", "Jason Nguyen", "Adam He"]],
    [["Amy Lin", "Michelle Martinez", "Izzie Karohl (Will Rice)", "Daniel Rothfusz"], ["Arnav Burudgunte", "Sean Cartwright", "Anthony Weeks", "Anna Alves", "Mainavi Reddy", "Shreya Jindal", "Amanda Hogan", "Esau Guajardo"]],
    [["Tre Henson", "Dani Knobloch", "Saniya Gayake (Baker)", "Ben Burstain"], ["Spencer Darwall", "Ryan Mbuashu-Ndip", "Ridhi Gari", "Makayla Brown", "Cuiyuanxiu Chen", "Benjamin Greaves", "William Zhang", "Amey Maley"]],
    [["Piper Harris", "Anthony Guzzo", "Steven Feng (McMurtry)", "Sanjana Krishnan"], ["Andrew Bare", "Jaime Tellez", "Dylan DuCharme", "Colin Lawrence", "Margaret Li", "Elena Carmichael", "Carly Ngo", "Jessica Suh"]],
    [["Juan Serrano", "Lauren Ivory", "Julie Street (Jones)", "Bianca Chen"], ["Jessica Opsahl-Ong", "Andrew Murray", "Ryan Babe", "Albert Wan", "Tiffany Tang", "Santi Parra-Vargas", "Jose Acuna Valenzuela", "Kaylah Cantu", "Chuk Uzowihe"]],
    [["Vivian Wong (Duncan)", "Ginnie Okafor", "Felix Desimoni", "Bhavana Kunisetty"], ["Evan Stegall", "Mimi Filkin", "Sarah Kutz", "Andrew Awe", "Jalen Reeves", "Leo Oh"]],
    [["Rose Click", "Tanuj Prajapati", "Armando Amigon (Lovett)", "Soha Rizvi"], ["Isabelle Williams", "Natalie Pellette", "Izzi Childers", "Shaun Kerry", "Jose Oviedo", "Rahul Kumar", "Tyler Braito"]],
    [["Lila Frenkel (Duncan)", "Kourtney Kanja", "Bert Odinet", "Makayla Franco"], ["Sarah Kim", "Maggie Han", "Seniha Elick", "Robert Heeter", "Eric Savarese", "Fred Bush", "Khondker Salim", "Ebube Ukabiala"]],
    [["Eric Torres (Wiess)", "Matthew Brun", "Emily Chang", "Nana Mensah-Bosu"], ["Ricardo Robles", "Adam Cohen", "Daniel Cho", "Bruce Xu", "Valerie Elizondo", "Rian Philip", "Isha Khapre", "Hannah Kang"]],
    [["Shawn Zheng", "Hannah Meeks", "Lexi Ellerbe", "George Liu (Will Rice)"], ["Valerie Swe", "Mallory Tucker", "Sena Ahadzie", "Lily Primus", "Rick Castellon", "Josh Fang", "William Burbank", "Riley Barker"]],
    //2019 O-Week Groups
    [["Matthew Brun", "Lisa Shi", "Hannah Vincent", "Andrew Abhikhaled (Jones)"], ["Katie Bablak", "Kourtney Kanja", "Jesus Galvan", "Kieren Boyd", "Tara Simpson-Sullivan", "Roscoe Bussell", "Bill Qian", "Juan Rubio"]],
    [["Bert Odinet", "Bharathvi Selvan", "Vy Dang", "Shryans Goyal (Will Rice)"], ["Andrew Li", "Arvind Ramesh", "Ginny Qian", "Divya Venkatesh", "Ella Hoyt", "Sophia Zhou"]],
    [["Amanda Yang", "Piper Harris", "Nikit Venishetty (Will Rice)", "Steffi Halow"], ["CG Marinelli", "Sawyer Archer", "Janya Ram", "Joanna Wang", "Vinay Tummarakota", "Ryan Knightly", "Aurian Maleki"]],
    [["Chris Lee", "Vikram Aggarwal", "Salonee Shah", "Alyson Resnick (McMurtry)"], ["Amber Pitre", "Dani Knobloch", "Madhu Venkatesalu", "Can Erdogan", "Truman Archer", "Adam Bobak"]],
    [["Jae Kim", "Caitlin Simcox", "Jeel Mehta (Wiess)", "Nishant Pradhan (Martel)"], ["Aaron Lin", "Sini Koivu", "Mabel Tang", "Marc Shen"]],
    [["Juan Serrano", "Rose Click", "Chris Villareal", "Sam Fowler (McMurtry)"], ["Sara Mansfield", "Ashley Noh", "Sophia Prieto", "Jesus Galvan", "Brett Bussey"]],
    [["Will Ledig", "Esther Choi", "Whitney Jin", "Brandon Chow (Will Rice)"], ["Tanuj Prajapati", "Bianca Chen", "Ari Vilker", "Ginnie Okafor", "Alex Elkin", "Luna Cortelezzi", "Jonathan Sheng", "Amanda Dominguez"]],
    [["Andreas Weyland", "Jade McAdams", "Bill Huynh", "Carrigan Hudgins (Sid)"], ["Andre Wasem", "Oscar Reynozo", "Anthony Guzzo"]],
    [["Anthony Ngyuen", "Chidera Ibezue", "Jeeyoon Kim", "Noah Masimore (Duncan)"], ["Hope Moustakakis", "Chloe Hur", "Kirk Lockhart", "Ibrahim Elsharkawy", "Jose Mata Esqueda", "Antonio Caballero", "Sydney Little", "Sean Gao"]],
    [["Karen Qi", "Hociel Landa", "Amanda Lopatin", "Nathaniel Wu (Wiess)"], []],
    [["Savannah Kuchar", "Mason Reece", "Victor Nguyen (Lovett)", "Natalie Gault"], []],
    [["Morgan Seay", "Saipriya Lammata (Jones)", "Jordan Pflum", "Vickie Lu"], []],
    //2018 O-Week Groups
    [[], ["Alp Yakici", "Shawn Zheng"]],
    [[], ["Daniel Rothfusz", "Lauren Ivory", "Isabelle Scott"]],
    [[], ["Caroline Koester", "Syed Shams", "Alex Gallegos", "Abby Webb", "Brandon Stanley", "Makayla Franco", "Wilson Wang"]]
]
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
function getEveryone() {
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
//returns the average distance from everyone in the network
function avgDistance(source) {
    var sum = 0
    var people = 0
    for (let person of getEveryone()) {
        sum += findDistance(source, person)
        people += 1
    }
    return sum / people
}
//returns the person with the most immediate connections
function getMostImmediateConnections() {
    var num = 0
    var person = ""
    for (let source of getEveryone()) {
        if (getImmediateFamily(source).length > num && source) {
            person = source
            num = getImmediateFamily(source).length
        }
    }
return person
}
//returns the person with the most descendants
function getMostDescendants() {
    var num = 0
    var person = ""
    for (let source of getEveryone()) {
        if (getDescendants(source).length > num && source) {
            person = source
            num = getDescendants(source).length
        }
    }
return person
}
//print functions
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
            return "Co"
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
function findPath(source, name) {
    var map = BFSMap(source)
    var path = [name]
    while (path[0] !== source) {
        path.unshift(map[path[0]][1])
    }
    return path
}
//web-friendly path printer
function printPath(source, name) {
    var path = findPath(source, name)
    var toReturn = ""
    for (let i = 0; i < path.length - 1; i++) {
        var relation = findRelation(path[i], path[i + 1])
        var relText = ""
        if (relation === "Parent") {
        	relText = path[i] + " is " + path[i + 1] + "'s parent"
        }
        if (relation === "Child") {
        	relText = path[i] + " is " + path[i + 1] + "'s child"
        }
        if (relation === "Sibling") {
        	relText = path[i] + " is " + path[i + 1] + "'s sibling"
        }
        if (relation === "Co") {
        	relText = path[i] + " is " + path[i + 1] + "'s co"
        }
        toReturn += relText + "<br>"
    }
    var len = path.length - 1
    toReturn += "Path length: " + len
    return toReturn
}
//finds the distance from source to name
function findDistance(source, name) {
    var path = findPath(source, name)
    return path.length - 1
}
//displays the descendants of person1
function getDescendants(person1) {
    var descendants = []
    for (let child of getChildren(person1)) {
    	descendants.push(child)
      for (let grandchild of getDescendants(child)) {
      	descendants.push(grandchild)
        for (let greatgrandchild of getDescendants(grandchild)) {
       		descendants.push(greatgrandchild)
          for (let great2grandchild of getDescendants(greatgrandchild)) {
       			descendants.push(great2grandchild)
       		}
       	}
    	}
    }
    return descendants
}
//displays person1 and their immediate family
function explore(person1) {
	var toReturn = "Looking at: " + person1
    toReturn += "<br>Immediate connections: " + getImmediateFamily(person1).length
    if (getDescendants(person1).length) {
    	toReturn += "<br>Descendants: " + getDescendants(person1).length
    }
  if (getParents(person1).length) {
  	toReturn += "<br><br>Parents:"
  	for (let parent of getParents(person1)) {
  		toReturn += "<br>" + parent
  	}
  }
  if (getChildren(person1).length && getChildren(person1)[0]) {
  	toReturn += "<br><br>Children:"
  	for (let child of getChildren(person1)) {
  		if (child) {
   			toReturn += "<br>" + child
    	}
    }
  }
  if (getSiblings(person1).length) {
    toReturn += "<br><br>Siblings:"
    for (let sibling of getSiblings(person1)) {
      toReturn += "<br>" + sibling
    }
  }
  if (getCos(person1).length) {
    toReturn += "<br><br>Cos:"
    for (let co of getCos(person1)) {
      toReturn += "<br>" + co
    }
  }
  return toReturn
}

var e = getEveryone().sort()
//console.log(e)
for (let person of e) {
    //console.log("<option value=\"" + person + "\"></option>")
}

console.log(getEveryone().length)
console.log(getMostImmediateConnections())
console.log(getMostDescendants())