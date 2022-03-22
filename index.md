<html>
<head>
    <h1>Genealogy Calculator</h1>
</head>
<body>
<p>This site enables you to find the distance and path between two people in the tree through O-Week families.
</p>
<p id="total-people-count"></p>
<p>
Find Path: Finds the shortest path through the network from Person 1 to Person 2. Displays the people the path traverses and their relationships.
<br><br>
Explore Tree: Displays the immediate family of Person 1. Click on other people to display their immediate family.
</p>
<h6>Note: I do <strong>not</strong> have everyone in Hanszen in the network. If you want someone to be added, email amt15@rice.edu with the person to be added and a list of everyone (that you know of) in their O-Week Group. Also email if something you see is incorrect, or if you have any other suggestions. Thanks for helping expand the network!</h6>
    <form>
        <div>
            <label>Action</label>
            <select name="action" id="action">
                <option id="find-path" value="find-path">Find Path</option>
                <option id="explore-tree" value="explore-tree">Explore Tree</option>
            </select>
        </div>
        <div>
            <label for="person1name">Person 1</label>
            <input type="text" id="person1name" name="person1name" list="people">
        </div>
        <div>
            <label for="person2name">Person 2</label>
            <input type="text" id="person2name" name="person2name" list="people">
        </div>
        <div>
            <button type="button" onclick="doStuff()">Submit</button>
            <script>
                function doStuff() {
                    var action = document.getElementById("action").value
                    var person1 = document.getElementById("person1name").value
                    var person2 = document.getElementById("person2name").value
                    console.log([action, person1, person2])
                    if (person1 !== "" && person2 !== "" && action === "find-path") {
                        document.getElementById("pathdisplay").innerHTML = printPath(person1, person2)
                        document.getElementById("exploredisplay").innerHTML = ""
                    }
                    if (person1 !== "" && action === "explore-tree") {
                    	document.getElementById("exploredisplay").innerHTML = explore(person1)
                      document.getElementById("pathdisplay").innerHTML = ""
                    } 
                }
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
    [["Chris Lee", "Vikram Aggarwal", "Salonee Shah", "Alyson Resnick (McMurtry)"], ["Amber Pitre", "Dani Knobloch", "Madhu Venkatesalu", "Can Erdogan", "Truman Archer", "Adam Bobak", "Sai Govindu", "Zach Crisler"]],
    [["Jae Kim", "Caitlin Simcox", "Jeel Mehta (Wiess)", "Nishant Pradhan (Martel)"], ["Aaron Lin", "Sini Koivu", "Mabel Tang", "Marc Shen"]],
    [["Juan Serrano", "Rose Click", "Chris Villareal", "Sam Fowler (McMurtry)"], ["Sara Mansfield", "Ashley Noh", "Sophia Prieto", "Jesus Galvan", "Brett Bussey", "Andrea Rivas", "Jason Zhu", "Ethan Levin"]],
    [["Will Ledig", "Esther Choi", "Whitney Jin", "Brandon Chow (Will Rice)"], ["Tanuj Prajapati", "Bianca Chen", "Ari Vilker", "Ginnie Okafor", "Alex Elkin", "Luna Cortelezzi", "Jonathan Sheng", "Amanda Dominguez"]],
    [["Andreas Weyland", "Jade McAdams", "Bill Huynh", "Carrigan Hudgins (Sid)"], ["Andre Wasem", "Oscar Reynozo", "Anthony Guzzo"]],
    [["Anthony Ngyuen", "Chidera Ibezue", "Jeeyoon Kim", "Noah Masimore (Duncan)"], ["Hope Moustakakis", "Chloe Hur", "Kirk Lockhart", "Ibrahim Elsharkawy", "Jose Mata Esqueda", "Antonio Caballero", "Sydney Little", "Sean Gao"]],
    [["Karen Qi", "Hociel Landa", "Amanda Lopatin", "Nathaniel Wu (Wiess)"], []],
    [["Savannah Kuchar", "Mason Reece", "Victor Nguyen (Lovett)", "Natalie Gault"], ["Zach Rewolinski", "Lara Lin", "Daniel Schrager", "Grace Stewart"]],
    [["Morgan Seay", "Saipriya Lammata (Jones)", "Jordan Pflum", "Vickie Lu"], []],
    //2018 O-Week Groups
    [["Valerie Du", "Bill Huynh", "Sabrina Hernandez (Jones)", "Natalie Gault"], ["Alp Yakici", "Shawn Zheng", "Annie Nguyen", "Ben Glotzer", "Mattie Meacham", "Meerae Kim", "Oscar Soto"]],
    [[], ["Daniel Rothfusz", "Lauren Ivory", "Isabelle Scott"]],
    [[], ["Caroline Koester", "Syed Shams", "Alex Gallegos", "Abby Webb", "Brandon Stanley", "Makayla Franco", "Wilson Wang"]]
    [["Amanda Yang", "Q Tabarestani"], ["Mason Reece", "Morgan Seay", "Lisa Shi", "Jae Kim", "Min Kang", "Jacob Doddridge", "Paris Fox", "Lucas Lemonholm"]],
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
function readMore() {
    if (document.getElementById("readmore").innerHTML.length < 10) {
      document.getElementById("readmore").innerHTML = "The Hanszen O-Week Genealogy Project aims to document the complex family tree of O-Week families at Hanszen College, the best residential college of Rice University.<br><br>The system was created by Alan Tapper in 2021, and includes Hanszenites who matriculated in or after 2017.<br><br>This site does not use any external family tree software, as those cannot handle all the relationships that are needed for this network to work. Specifically, the Hanszen \"family tree\" is not technically a tree.<br><br><strong>Structure</strong><br><br>During O-Week, new students are placed in O-Week groups. An O-Week group at Hanszen consists of around 10 new students and 4 advisors (sophomores or older). The groups are made such that no two advisors in a group are immediately \"related\", i.e. one was not the other's advisor and they were not in the same group when they were new students. A person's immediate family is their advisors (also called parents), the other new students in their group (siblings), and if they advised then the students they advised for (children), and the other advisors in their group (cos).<br><br><strong>Features</strong><br><br>Find the path between any two people in the network<br><br>Explore the family around any specific person<br><br><strong>Statistics</strong><br><br>Number of people in the network: " + getEveryone().length + "<br>Most immediate connections: " + getMostImmediateConnections() + " with " + getImmediateFamily(getMostImmediateConnections()).length + "<br>Most descendants: " + getMostDescendants() + " with " + getDescendants(getMostDescendants()).length  + "<br><br><br>If you want someone to be added, email amt15@rice.edu with the person to be added and a list of everyone (that you know of) in their O-Week Group. Also email if something you see is incorrect, or if you have any other suggestions. Thanks for helping expand the network!"
      }
      else {
      	document.getElementById("readmore").innerHTML = ""
      }
}
document.getElementById("total-people-count").innerHTML = "Currently there are <strong>" + getEveryone().length + "</strong> people in the network!"
            </script>
        </div>
        <datalist id="people">
<option value=""></option>
<option value="Aaron Lin"></option>
<option value="Abby Webb"></option>
<option value="Adam Bobak"></option>
<option value="Adam Cohen"></option>
<option value="Adam He"></option>
<option value="Adara Toran"></option>
<option value="Adi Zytek"></option>
<option value="Ai Bunchatheravate"></option>
<option value="Alan Tapper"></option>
<option value="Albert Wan"></option>
<option value="Alex Elkin"></option>
<option value="Alex Gallegos"></option>
<option value="Alex Holzbach"></option>
<option value="Alison Qiu"></option>
<option value="Alizay Azeem (Wiess)"></option>
<option value="Alp Yakici"></option>
<option value="Alyson Resnick (McMurtry)"></option>
<option value="Amanda Dominguez"></option>
<option value="Amanda Hogan"></option>
<option value="Amanda Lopatin"></option>
<option value="Amanda Mae Ashley"></option>
<option value="Amanda Yang"></option>
<option value="Amber Pitre"></option>
<option value="Amey Maley"></option>
<option value="Ammar Siddiqi"></option>
<option value="Amy Lin"></option>
<option value="Anagha Alapati"></option>
<option value="Andre Wasem"></option>
<option value="Andrea Rivas"></option>
<option value="Andreas Weyland"></option>
<option value="Andrew Abhikhaled (Jones)"></option>
<option value="Andrew Awe"></option>
<option value="Andrew Bare"></option>
<option value="Andrew Li"></option>
<option value="Andrew Murray"></option>
<option value="Angelina Puente-Perez"></option>
<option value="Anna Alves"></option>
<option value="Annie Nguyen"></option>
<option value="Anthony Guzzo"></option>
<option value="Anthony Ngyuen"></option>
<option value="Anthony Weeks"></option>
<option value="Antonio Caballero"></option>
<option value="Anushka Agrawal"></option>
<option value="Ari Vilker"></option>
<option value="Arielle Sanford"></option>
<option value="Armando Amigon (Lovett)"></option>
<option value="Arnav Burudgunte"></option>
<option value="Arturo Rodriguez Lopez"></option>
<option value="Arvind Ramesh"></option>
<option value="Aryana Suhartono"></option>
<option value="Ashley Noh"></option>
<option value="Astra Burke"></option>
<option value="Aurian Maleki"></option>
<option value="Ava White"></option>
<option value="Azhariya Ellis"></option>
<option value="Basma Bedawi"></option>
<option value="Bella Bartos"></option>
<option value="Ben Burstain"></option>
<option value="Ben Glotzer"></option>
<option value="Ben Montag"></option>
<option value="Ben Murdoch (Lovett)"></option>
<option value="Benjamin Greaves"></option>
<option value="Bert Odinet"></option>
<option value="Bharathvi Selvan"></option>
<option value="Bhavana Kunisetty"></option>
<option value="Bianca Chen"></option>
<option value="Bill Huynh"></option>
<option value="Bill Nguyen"></option>
<option value="Bill Qian"></option>
<option value="Brandon Chow (Will Rice)"></option>
<option value="Brandon Stanley"></option>
<option value="Brett Bussey"></option>
<option value="Brian Baskin"></option>
<option value="Brian Lee"></option>
<option value="Brian Seo"></option>
<option value="Bruce Xu"></option>
<option value="Byron Hart"></option>
<option value="CG Marinelli"></option>
<option value="Caitlin Simcox"></option>
<option value="Can Erdogan"></option>
<option value="Carlos Rivera"></option>
<option value="Carly Ngo"></option>
<option value="Caroline Koester"></option>
<option value="Caroline Tanner"></option>
<option value="Carrigan Hudgins (Sid)"></option>
<option value="Celeste Colato"></option>
<option value="Charlotte Cohen"></option>
<option value="Chidera Ibezue"></option>
<option value="Chloe Hur"></option>
<option value="Chris Lee"></option>
<option value="Chris Villareal"></option>
<option value="Christa Westheimer (McMurtry)"></option>
<option value="Christina Wong"></option>
<option value="Christy Deng"></option>
<option value="Chuck Wells"></option>
<option value="Chuk Uzowihe"></option>
<option value="Claire Brix"></option>
<option value="Claire Xu"></option>
<option value="Cole Ponsi (Will Rice)"></option>
<option value="Colin Lawrence"></option>
<option value="Connor Taylor"></option>
<option value="Corey Donovan"></option>
<option value="Crystal Unegbu"></option>
<option value="Cuiyuanxiu Chen"></option>
<option value="Cynthia Chen (Martel)"></option>
<option value="Dani Knobloch"></option>
<option value="Daniel Brown"></option>
<option value="Daniel Cho"></option>
<option value="Daniel Rothfusz"></option>
<option value="Daniel Schrager"></option>
<option value="Daniel Stulski"></option>
<option value="Daniel Wang"></option>
<option value="Daniel Zhao"></option>
<option value="Daniela Covarrubias"></option>
<option value="Danika Li"></option>
<option value="Darcey Lonsdale"></option>
<option value="Darius Huang"></option>
<option value="David Kurp"></option>
<option value="David Zhu"></option>
<option value="Dillon Akerman"></option>
<option value="Divya Venkatesh"></option>
<option value="Dylan DuCharme"></option>
<option value="Dylan Grant"></option>
<option value="Ebube Ukabiala"></option>
<option value="Elena Carmichael"></option>
<option value="Ella Hoyt"></option>
<option value="Ella Price"></option>
<option value="Ellie Cha"></option>
<option value="Emerson Coronel"></option>
<option value="Emery Engling"></option>
<option value="Emily Chang"></option>
<option value="Emily Pena"></option>
<option value="Emily Wu"></option>
<option value="Eric Savarese"></option>
<option value="Eric Torres (Wiess)"></option>
<option value="Esau Guajardo"></option>
<option value="Esha Patel"></option>
<option value="Esther Choi"></option>
<option value="Ethan Levin"></option>
<option value="Evan Stegall"></option>
<option value="Felix Desimoni"></option>
<option value="Fred Bush"></option>
<option value="Gabrielle Allen"></option>
<option value="Genesis Hahn"></option>
<option value="George Liu (Will Rice)"></option>
<option value="Gia Braddock (Brown)"></option>
<option value="Ginnie Okafor"></option>
<option value="Ginny Qian"></option>
<option value="Grace Kneidel (Brown)"></option>
<option value="Grace Stewart"></option>
<option value="Hannah Kang"></option>
<option value="Hannah Kim"></option>
<option value="Hannah Meeks"></option>
<option value="Hannah Son"></option>
<option value="Hannah Vincent"></option>
<option value="Hari Gotluru"></option>
<option value="Hemish Thakkar"></option>
<option value="Henry Cabrera"></option>
<option value="Hociel Landa"></option>
<option value="Hope Moustakakis"></option>
<option value="Ibrahim Elsharkawy"></option>
<option value="Isabelle Scott"></option>
<option value="Isabelle Williams"></option>
<option value="Isha Khapre"></option>
<option value="Izzi Childers"></option>
<option value="Izzie Karohl (Will Rice)"></option>
<option value="Jackie Wu"></option>
<option value="Jacob Doddridge"></option>
<option value="Jade McAdams"></option>
<option value="Jae Kim"></option>
<option value="Jaime Tellez"></option>
<option value="Jalen Reeves"></option>
<option value="James Belanger"></option>
<option value="Janya Ram"></option>
<option value="Jarrett Prchal"></option>
<option value="Jason Nguyen"></option>
<option value="Jason Zhu"></option>
<option value="Javi Milagro Caro"></option>
<option value="Jay Folmar"></option>
<option value="Jeel Mehta (Wiess)"></option>
<option value="Jeeyoon Kim"></option>
<option value="Jessica Opsahl-Ong"></option>
<option value="Jessica Suh"></option>
<option value="Jesus Galvan"></option>
<option value="Jiwon Han"></option>
<option value="Jo Harikrishna"></option>
<option value="Joanna Wang"></option>
<option value="John Cook (Will Rice)"></option>
<option value="Jonah Lubin"></option>
<option value="Jonathan Seyoum"></option>
<option value="Jonathan Sheng"></option>
<option value="Jordan Contreras"></option>
<option value="Jordan Pflum"></option>
<option value="Jose Acuna Valenzuela"></option>
<option value="Jose Mata Esqueda"></option>
<option value="Jose Oviedo"></option>
<option value="Joseph Flores"></option>
<option value="Joseph Liu"></option>
<option value="Josh Fang"></option>
<option value="Josh Yu"></option>
<option value="Juan Rubio"></option>
<option value="Juan Serrano"></option>
<option value="Julia Englehardt (McMurtry)"></option>
<option value="Julia Hanson"></option>
<option value="Julie Street (Jones)"></option>
<option value="Jun-Ha Jung"></option>
<option value="Kai Cowin"></option>
<option value="Karen Marquez"></option>
<option value="Karen Qi"></option>
<option value="Katherine Jeng"></option>
<option value="Katie Bablak"></option>
<option value="Kausar Alkaderi"></option>
<option value="Kaylah Cantu"></option>
<option value="Kaylah Patel"></option>
<option value="Kelly Shang"></option>
<option value="Ken Chen"></option>
<option value="Kenna Dixon"></option>
<option value="Khondker Salim"></option>
<option value="Kian Robinson"></option>
<option value="Kieren Boyd"></option>
<option value="Kirk Lockhart"></option>
<option value="Kourtney Kanja"></option>
<option value="Laney Schewgman"></option>
<option value="Lara Lin"></option>
<option value="Laura Yee"></option>
<option value="Lauren Hu"></option>
<option value="Lauren Ivory"></option>
<option value="Leigh Gabriely"></option>
<option value="Leo Oh"></option>
<option value="Leora Maksoud"></option>
<option value="Lexi Ellerbe"></option>
<option value="Liam Waite"></option>
<option value="Lila Frenkel (Duncan)"></option>
<option value="Lillian Sims"></option>
<option value="Lily Primus"></option>
<option value="Lily Remington"></option>
<option value="Lisa Shi"></option>
<option value="Lucas Lemonholm"></option>
<option value="Lucas Newman"></option>
<option value="Luna Cortelezzi"></option>
<option value="Maanvi Thawani"></option>
<option value="Mabel Tang"></option>
<option value="Maddy Garrity"></option>
<option value="Madhu Venkatesalu"></option>
<option value="Maggie Han"></option>
<option value="Mainavi Reddy"></option>
<option value="Makayla Brown"></option>
<option value="Makayla Franco"></option>
<option value="Mallory Tucker"></option>
<option value="Marc Armena"></option>
<option value="Marc Shen"></option>
<option value="Marcus Williams"></option>
<option value="Margaret Li"></option>
<option value="Mark Lopatofsky"></option>
<option value="Mason Reece"></option>
<option value="Matthew Brun"></option>
<option value="Matthew Zamarripa (Baker)"></option>
<option value="Mattie Meacham"></option>
<option value="Max Kovalchick"></option>
<option value="McKenna Tanner"></option>
<option value="Meerae Kim"></option>
<option value="Melvin Zarghooni"></option>
<option value="Michelle Fox"></option>
<option value="Michelle Martinez"></option>
<option value="Michelle Pham"></option>
<option value="Mimi Filkin"></option>
<option value="Min Kang"></option>
<option value="Morgan Seay"></option>
<option value="Moses Glickman (Martel)"></option>
<option value="Nana Mensah-Bosu"></option>
<option value="Natalie Byron"></option>
<option value="Natalie Gault"></option>
<option value="Natalie Pellette"></option>
<option value="Nathaniel Moriss"></option>
<option value="Nathaniel Wu (Wiess)"></option>
<option value="Nayna Nambiar"></option>
<option value="Nikhil Samudrala"></option>
<option value="Nikit Venishetty (Will Rice)"></option>
<option value="Nishant Pradhan (Martel)"></option>
<option value="Nitin Reganti"></option>
<option value="Noah Elzner"></option>
<option value="Noah Hight"></option>
<option value="Noah Masimore (Duncan)"></option>
<option value="Nora Han"></option>
<option value="Oscar Reynozo"></option>
<option value="Oscar Soto"></option>
<option value="Pablo Solano"></option>
<option value="Paris Fox"></option>
<option value="Peter Reynolds"></option>
<option value="Piper Harris"></option>
<option value="Praneel Joshi (Lovett)"></option>
<option value="Priscilla Ibrahim"></option>
<option value="Priya Tirumala"></option>
<option value="Q Tabarestani"></option>
<option value="Radhika Patel"></option>
<option value="Rahul Kumar"></option>
<option value="Ray Xiang"></option>
<option value="Reece Lusich"></option>
<option value="Rian Philip"></option>
<option value="Ricardo Robles"></option>
<option value="Rick Castellon"></option>
<option value="Ridhi Gari"></option>
<option value="Riley Barker"></option>
<option value="Riya Pagilla"></option>
<option value="Robert Heeter"></option>
<option value="Roscoe Bussell"></option>
<option value="Rose Click"></option>
<option value="Ryan Babe"></option>
<option value="Ryan Knightly"></option>
<option value="Ryan Mbuashu-Ndip"></option>
<option value="Sabrina Hernandez (Jones)"></option>
<option value="Sadie Siegel (Lovett)"></option>
<option value="Sai Govindu"></option>
<option value="Saipriya Lammata (Jones)"></option>
<option value="Salonee Shah"></option>
<option value="Sam Fowler (McMurtry)"></option>
<option value="Sam Sarver"></option>
<option value="Saniya Gayake (Baker)"></option>
<option value="Sanjana Krishnan"></option>
<option value="Santi Parra-Vargas"></option>
<option value="Sara Mansfield"></option>
<option value="Sara Price"></option>
<option value="Sarah Davidson"></option>
<option value="Sarah Kim"></option>
<option value="Sarah Kutz"></option>
<option value="Savannah Kuchar"></option>
<option value="Sawyer Archer"></option>
<option value="Sean Cartwright"></option>
<option value="Sean Gao"></option>
<option value="Sebastian Molina"></option>
<option value="Sena Ahadzie"></option>
<option value="Seniha Elick"></option>
<option value="Shaun Kerry"></option>
<option value="Shawn Zheng"></option>
<option value="Shihab Ahmed"></option>
<option value="Shreya Jindal"></option>
<option value="Shryans Goyal (Will Rice)"></option>
<option value="Sini Koivu"></option>
<option value="Soha Rizvi"></option>
<option value="Sophia Prieto"></option>
<option value="Sophia Zhou"></option>
<option value="Spencer Darwall"></option>
<option value="Steffi Halow"></option>
<option value="Stephanie Agu"></option>
<option value="Stephen Xu"></option>
<option value="Steven Feng (McMurtry)"></option>
<option value="Suraj Chandramouli"></option>
<option value="Sydney Little"></option>
<option value="Syed Shams"></option>
<option value="Taeho Choe"></option>
<option value="Tammy Feng"></option>
<option value="Tanuj Prajapati"></option>
<option value="Tanya Jain"></option>
<option value="Tara Simpson-Sullivan"></option>
<option value="Temi Dada"></option>
<option value="Tessa Schreiber"></option>
<option value="Thara Venkateswaran"></option>
<option value="Tiffany Tang"></option>
<option value="Tony Tan"></option>
<option value="Tre Henson"></option>
<option value="Truman Archer"></option>
<option value="Tyler Braito"></option>
<option value="Valentina Osorio"></option>
<option value="Valerie Du"></option>
<option value="Valerie Elizondo"></option>
<option value="Valerie Swe"></option>
<option value="Vickie Lu"></option>
<option value="Victor Nguyen (Lovett)"></option>
<option value="Victoria Albanese"></option>
<option value="Victoria Johns"></option>
<option value="Vikram Aggarwal"></option>
<option value="Vinay Tummarakota"></option>
<option value="Vivian Wong (Duncan)"></option>
<option value="Vy Dang"></option>
<option value="Vy Luu"></option>
<option value="Warren Rose"></option>
<option value="Whitney Ball"></option>
<option value="Whitney Jin"></option>
<option value="Will Ledig"></option>
<option value="Will Ramos"></option>
<option value="William Burbank"></option>
<option value="William Zhang"></option>
<option value="Wilson Wang"></option>
<option value="Wyatt Cho"></option>
<option value="Yajing Hu"></option>
<option value="Yimo Wang"></option>
<option value="Yuka Aoyama"></option>
<option value="Yulin Lu"></option>
<option value="Zach Crisler"></option>
<option value="Zach Rewolinski"></option>
<option value="Zarek Lu"></option>
<option value="undefined"></option>
        </datalist>
    </form>
    <p id="pathdisplay" disabled></p>
    <p id="exploredisplay" disabled></p>
    <button type="button" onclick="readMore()">Read more about the project!</button>
        <p id="readmore">
    </p>
</body>
</html>