<html>
<head>
    <h1>Geneology Calculator</h1>
</head>
<body>
    <form>
        <div>
            <label>Action</label>
            <select name="action" id="action">
                <option id="find-distance" value="find-distance">Find Distance</option>
                <option id="find-path" value="find-path">Find Path</option>
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
                    //document.getElementById("testdisplay").innerHTML = action + " from " + person1 + " to " + person2
                    //document.getElementById("testdisplay").disabled = false
                    if (person1 !== "" && person2 !== "") {
                        if (action === "find-distance") {
                            document.getElementById("pathdisplay").innerHTML = findDistance(person1, person2)
                        }
                        if (action === "find-path") {
                            document.getElementById("pathdisplay").innerHTML = printPath(person1, person2)
                        }
                    }
                }
                var data = [
    //2021 O-Week Groups
    [["Alan Tapper", "Chloe Hur", "Leigh Gabriely", "Matthew Zamarripa"], ["Connor Taylor", "Henry Cabrera", "Tony Tan", "Ray Xiang", "Max Kovalchick", "Katherine Jeng", "Yimo Wang", "Tanya Jain", "Gabrielle Allen", "Caroline Tanner"]],
    [["Katie Bablak", "Hope Moustakakis", "Anushka Agrawal", "John Cook"], ["Nitin Reganti", "Warren Rose", "Laura Yee", "Karen Marquez", "Adara Toran", "Aryana Suhartono", "Darius Huang", "Emerson Coronel", "Mark Lopatofsky", "Esha Patel"]],
    [["Marc Armena", "Grace Kneidel", "Khondker Salim", "Charlotte Cohen"], ["Natalie Byron", "Ava White", "Vy Luu", "Priya Tirumala", "David Kurp", "Daniel Stulski", "Taeho Choe", "Kausar Alkaderi", "Ai Bunchatheravate"]],
    [["Julia Englehardt", "Anthony Guzzo", "Corey Donovan", "Sini Koivu"], ["Emily Pena", "Ellie Cha", "Darcey Lonsdale", "Nayna Nambiar", "Sara Price", "Joseph Flores", "Sam Sarver", "Suraj Chandramouli", "Noah Hight"]],
    [["Gia Braddock", "Daniel Rothfusz", "Dylan DuCharme", "Mabel Tang"], ["Maddy Garrity", "Bella Bartos", "Adi Zytek", "Michelle Fox", "Yuin Lu", "Peter Reynolds", "Joseph Liu", "Liam Waite", "Ammar Siddiqi", "Brian Seo"]],
    [["Ben Murdoch", "Aaron Lin", "Sarah Kim", "Victoria Johns"], ["Crystal Unegbu", "Danika Li", "Daniela Covarrubias", "Lauren Hu", "Thara Venkateswaran", "Emery Engling", "Jonathan Seyoum", "Zarek Lu", "Arturo Rodriguez Lopez", "James Belanger"]],
    [["Sadie Siegel", "Madhu Venkatesalu", "Jarrett Prchal", "Arvind Ramesh"], ["Sarah Davidson", "Whitney Ball", "Jo Harikrishna", "Genesis Hahn", "Riya Pagilla", "Marcus Williams", "Lucas Newman", "Jordan Contreras", "Nikhil Samudrala", "Ken Chen"]],
    [["Temi Dada", "Alp Yakici", "Ridhi Gari", "Andrew Li"], ["Stephanie Agu", "Leora Maksoud", "Basma Bedawi", "Kaylah Patel", "Jiwon Han", "Brian Baskin", "Shihab Ahmed", "Kai Cowin", "Hari Gotluru", "Bill Nguyen"]],
    [["Praneel Joshi", "Amanda Mae Ashley", "Shawn Zheng", "Maanvi Thawani"], ["Hannah Son", "Priscilla Ibrahim", "Christina Wong", "Victoria Albanese", "Kenna Dixon", "Will Ramos", "Javi Milagro Caro", "Josh Yu", "Daniel Brown", "Melvin Zarghooni"]],
    [["Claire Xu", "Moses Glickman", "McKenna Tanner", "Carlos Rivera"], ["Claire Brix", "Azhariya Ellis", "Lily Remington", "Hannah Kim", "Christy Deng", "Stephen Xu", "Jay Folmar", "Dillon Akerman", "Jonah Lubin", "Wyatt Cho"]],
    [["Jackie Wu", "Sara Mansfield", "Isabelle Scott", "Jose Oviedo"], ["Lillian Sims", "Emily Wu", "Alison Qiu", "Celeste Colato", "Dylan Grant", "Byron Hart", "Pablo Solano", "Chuck Wells", "David Zhu"]],
    [["Christa Westheimer", "Valentina Osorio", "Bert Odinet", "Juan Rubio"], ["Angelina Puente-Perez", "Julia Hanson", "Laney Schewgman", "Anagha Alapati", "Michelle Pham", "Nathaniel Moriss", "Sebastian Molina", "Ben Montag", "Daniel Zhao"]],
    //2020 O-Week Groups
    [["Alp Yakici", "Amanda Mae Ashley", "Cole Ponsi", "Tessa Schreiber"], ["Alan Tapper", "Brian Lee", "Marc Armena", "Noah Elzner", "Astra Burke", "Reece Lusich", "Valentina Osorio", "Hemish Thakkar", "Jun-Ha Jung"]],
    [["Mason Reece", "Radhika Patel", "Alizay Azeem", "Abby Webb"], ["Kian Robinson", "Alex Holzbach", "Anushka Agrawal", "Ella Price", "Tammy Feng"]],
    [["Syed Shams", "Daniel Wang", "Sara Mansfield", "Cynthia Chen"], ["Yuka Aoyama", "McKenna Tanner", "Arielle Sanford", "Maanvi Thawani", "Corey Donovan", "Jason Nguyen", "Adam He"]],
    [["Amy Lin", "Michelle Martinez", "Izzi Karohl", "Daniel Rothfusz"], ["Arnav Burudgunte", "Sean Cartwright", "Anthony Weeks", "Anna Alves", "Mainavi Reddy", "Shreya Jindall", "Amanda Hogan"]],
    [["Tre Henson", "Dani Knobloch", "Saniya Gayake", "Ben Burstain"], ["Spencer Darwall", "Ryan Mbuashu-Ndip", "Ridhi Gari", "Makayla Brown"]],
    [["Piper Harris", "Anthony Guzzo", "Steven Feng", "Sanjana Krishnan"], ["Andrew Bare", "Jaime Tellez", "Dylan DuCharme", "Colin Lawrence", "Margaret Li", "Elena Carmichael", "Carly Ngo", "Jessica Suh"]],
    [["Juan Serrano", "Lauren Ivory", "Julie Street", "Bianca Chen"], ["Jessica Opsahl-Ong", "Andrew Murray", "Ryan Babe", "Albert Wan", "Tiffany Tang", "Santi Parra-Vargas", "Jose Acuna Valenzuela", "Kaylah Cantu", "Chuk Uzowihe"]],
    [["Vivian Wong", "Ginnie Okafor", "Felix Desimoni", "Bhavana Kunisetty"], [""]],
    [["Rose Click", "Tanuj Prajapati", "Armando Amigon", "Soha Rizvi"], ["Isabelle Williams", "Natalie Pellette", "Izzi Childers", "Shaun Kerry"]],
    [["Lila Frenkel", "Kourtney Kanja", "Bert Odinet", "Makayla Franco"], ["Sarah Kim", "Maggie Han", "Robert Heeter", "Eric Savarese", "Fred Bush", "Khondker Salim", "Ebube Ukabiala"]],
    [["Eric Torres", "Matthew Brun", "Emily Chang", "Nana Mensah-Bosu"], ["Ricardo Robles", "Adam Cohen", "Daniel Cho", "Bruce Xu", "Valerie Elizondo"]],
    [["Shawn Zheng", "Hannah Meeks", "Lexi Ellerbe", "George Liu"], [""]],
    //2019 O-Week Groups
    [["Matthew Brun", "Lisa Shi", "Hannah Vincent", "Andrew Abhikhaled"], ["Katie Bablak", "Kourtney Kanja", "Jesus Galvan", "Kieren Boyd", "Tara Simpson-Sullivan", "Roscoe Bussell", "Bill Qian", "Juan Rubio"]],
    [["Bert Odinet", "Bharathvi Selvan", "Vy Dang", "Shryans Goyal"], ["Andrew Li", "Arvind Ramesh", "Ginny Qian", "Divya Venkatesh", "Ella Hoyt", "Sophia Zhou"]],
    [["Amanda Yang", "Piper Harris", "Nikit Venishetty", "Steffi Halow"], ["CG Marinelli", "Sawyer Archer", "Janya Ram", "Joanna Wang", "Vinay Tummarakota", "Ryan Knightly", "Aurian Maleki"]],
    [["Chris Lee", "Vikram Aggarwal", "Salonee Shah", "Alyson Resnick"], ["Amber Pitre", "Dani Knobloch", "Madhu Venkatesalu", "Andre Wasem", "Can Erdogan", "Truman Archer", "Adam Bobak"]],
    [["Jae Kim", "Caitlin Simcox", "Jeel Mehta", "Nishant Pradhan"], ["Aaron Lin", "Sini Koivu", "Mabel Tang", "Marc Shen"]],
    [["Juan Serrano", "Rose Click", "Chris Villareal", "Sam Fowler"], ["Sara Mansfield", "Ashley Noh", "Sophia Prieto", "Jesus Galvan", "Brett Bussey"]],
    [["Will Ledig", "Esther Choi", "Whitney Jin", "Brandon Chow"], ["Tanuj Prajapati", "Bianca Chen", "Ari Vilker", "Ginnie Okafor", "Alex Elkin", "Luna Cortelezzi", "Jonathan Sheng", "Amanda Dominguez"]]
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
function findPath(source, name) {
    var map = BFSMap(source)
    var path = [name]
    while (path[0] !== source) {
        path.unshift(map[path[0]][1])
    }
    return path
}
//website-friendly findPath
function printPath(source, name) {
    var path = findPath(source, name)
    var toReturn = ""
    for (let person of path) {
        toReturn += person + ", "
    }
    return toReturn.slice(0, toReturn.length - 2)
}
//finds the distance from source to name
function findDistance(source, name) {
    var map = BFSMap(source)
    return map[name][0]
}
//sorts the datalist in alphabetical order
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("people");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("option");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
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
<option value="Alex Holzbach"></option>
<option value="Alison Qiu"></option>
<option value="Alizay Azeem"></option>
<option value="Alp Yakici"></option>
<option value="Alyson Resnick"></option>
<option value="Amanda Dominguez"></option>
<option value="Amanda Hogan"></option>
<option value="Amanda Mae Ashley"></option>
<option value="Amanda Yang"></option>
<option value="Amber Pitre"></option>
<option value="Ammar Siddiqi"></option>
<option value="Amy Lin"></option>
<option value="Anagha Alapati"></option>
<option value="Andre Wasem"></option>
<option value="Andrew Abhikhaled"></option>
<option value="Andrew Bare"></option>
<option value="Andrew Li"></option>
<option value="Andrew Murray"></option>
<option value="Angelina Puente-Perez"></option>
<option value="Anna Alves"></option>
<option value="Anthony Guzzo"></option>
<option value="Anthony Weeks"></option>
<option value="Anushka Agrawal"></option>
<option value="Ari Vilker"></option>
<option value="Arielle Sanford"></option>
<option value="Armando Amigon"></option>
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
<option value="Ben Montag"></option>
<option value="Ben Murdoch"></option>
<option value="Bert Odinet"></option>
<option value="Bharathvi Selvan"></option>
<option value="Bianca Chen"></option>
<option value="Bill Nguyen"></option>
<option value="Bill Qian"></option>
<option value="Brandon Chow"></option>
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
<option value="Caroline Tanner"></option>
<option value="Celeste Colato"></option>
<option value="Charlotte Cohen"></option>
<option value="Chloe Hur"></option>
<option value="Chris Lee"></option>
<option value="Chris Villareal"></option>
<option value="Christa Westheimer"></option>
<option value="Christina Wong"></option>
<option value="Christy Deng"></option>
<option value="Chuck Wells"></option>
<option value="Chuk Uzowihe"></option>
<option value="Claire Brix"></option>
<option value="Claire Xu"></option>
<option value="Cole Ponsi"></option>
<option value="Colin Lawrence"></option>
<option value="Connor Taylor"></option>
<option value="Corey Donovan"></option>
<option value="Crystal Unegbu"></option>
<option value="Cynthia Chen"></option>
<option value="Dani Knobloch"></option>
<option value="Daniel Brown"></option>
<option value="Daniel Cho"></option>
<option value="Daniel Rothfusz"></option>
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
<option value="Eric Torres"></option>
<option value="Esha Patel"></option>
<option value="Esther Choi"></option>
<option value="Fred Bush"></option>
<option value="Gabrielle Allen"></option>
<option value="Genesis Hahn"></option>
<option value="George Liu"></option>
<option value="Gia Braddock"></option>
<option value="Ginnie Okafor"></option>
<option value="Ginny Qian"></option>
<option value="Grace Kneidel"></option>
<option value="Hannah Kim"></option>
<option value="Hannah Meeks"></option>
<option value="Hannah Son"></option>
<option value="Hannah Vincent"></option>
<option value="Hari Gotluru"></option>
<option value="Hemish Thakkar"></option>
<option value="Henry Cabrera"></option>
<option value="Hope Moustakakis"></option>
<option value="Isabelle Scott"></option>
<option value="Isabelle Williams"></option>
<option value="Izzi Childers"></option>
<option value="Izzi Karohl"></option>
<option value="Jackie Wu"></option>
<option value="Jae Kim"></option>
<option value="Jaime Tellez"></option>
<option value="James Belanger"></option>
<option value="Janya Ram"></option>
<option value="Jarrett Prchal"></option>
<option value="Jason Nguyen"></option>
<option value="Javi Milagro Caro"></option>
<option value="Jay Folmar"></option>
<option value="Jeel Mehta"></option>
<option value="Jessica Opsahl-Ong"></option>
<option value="Jessica Suh"></option>
<option value="Jesus Galvan"></option>
<option value="Jiwon Han"></option>
<option value="Jo Harikrishna"></option>
<option value="Joanna Wang"></option>
<option value="John Cook"></option>
<option value="Jonah Lubin"></option>
<option value="Jonathan Seyoum"></option>
<option value="Jonathan Sheng"></option>
<option value="Jordan Contreras"></option>
<option value="Jose Acuna Valenzuela"></option>
<option value="Jose Oviedo"></option>
<option value="Joseph Flores"></option>
<option value="Joseph Liu"></option>
<option value="Josh Yu"></option>
<option value="Juan Rubio"></option>
<option value="Juan Serrano"></option>
<option value="Julia Englehardt"></option>
<option value="Julia Hanson"></option>
<option value="Julie Street"></option>
<option value="Jun-Ha Jung"></option>
<option value="Kai Cowin"></option>
<option value="Karen Marquez"></option>
<option value="Katherine Jeng"></option>
<option value="Katie Bablak"></option>
<option value="Kausar Alkaderi"></option>
<option value="Kaylah Cantu"></option>
<option value="Kaylah Patel"></option>
<option value="Ken Chen"></option>
<option value="Kenna Dixon"></option>
<option value="Khondker Salim"></option>
<option value="Kian Robinson"></option>
<option value="Kieren Boyd"></option>
<option value="Kourtney Kanja"></option>
<option value="Laney Schewgman"></option>
<option value="Laura Yee"></option>
<option value="Lauren Hu"></option>
<option value="Lauren Ivory"></option>
<option value="Leigh Gabriely"></option>
<option value="Leora Maksoud"></option>
<option value="Lexi Ellerbe"></option>
<option value="Liam Waite"></option>
<option value="Lila Frenkel"></option>
<option value="Lillian Sims"></option>
<option value="Lily Remington"></option>
<option value="Lisa Shi"></option>
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
<option value="Marc Armena"></option>
<option value="Marc Shen"></option>
<option value="Marcus Williams"></option>
<option value="Margaret Li"></option>
<option value="Mark Lopatofsky"></option>
<option value="Mason Reece"></option>
<option value="Matthew Brun"></option>
<option value="Matthew Zamarripa"></option>
<option value="Max Kovalchick"></option>
<option value="McKenna Tanner"></option>
<option value="Melvin Zarghooni"></option>
<option value="Michelle Fox"></option>
<option value="Michelle Martinez"></option>
<option value="Michelle Pham"></option>
<option value="Moses Glickman"></option>
<option value="Nana Mensah-Bosu"></option>
<option value="Natalie Byron"></option>
<option value="Natalie Pellette"></option>
<option value="Nathaniel Moriss"></option>
<option value="Nayna Nambiar"></option>
<option value="Nikhil Samudrala"></option>
<option value="Nikit Venishetty"></option>
<option value="Nishant Pradhan"></option>
<option value="Nitin Reganti"></option>
<option value="Noah Elzner"></option>
<option value="Noah Hight"></option>
<option value="Pablo Solano"></option>
<option value="Peter Reynolds"></option>
<option value="Piper Harris"></option>
<option value="Praneel Joshi"></option>
<option value="Priscilla Ibrahim"></option>
<option value="Priya Tirumala"></option>
<option value="Radhika Patel"></option>
<option value="Ray Xiang"></option>
<option value="Reece Lusich"></option>
<option value="Ricardo Robles"></option>
<option value="Ridhi Gari"></option>
<option value="Riya Pagilla"></option>
<option value="Robert Heeter"></option>
<option value="Roscoe Bussell"></option>
<option value="Rose Click"></option>
<option value="Ryan Babe"></option>
<option value="Ryan Knightly"></option>
<option value="Ryan Mbuashu-Ndip"></option>
<option value="Sadie Siegel"></option>
<option value="Salonee Shah"></option>
<option value="Sam Fowler"></option>
<option value="Sam Sarver"></option>
<option value="Saniya Gayake"></option>
<option value="Sanjana Krishnan"></option>
<option value="Santi Parra-Vargas"></option>
<option value="Sara Mansfield"></option>
<option value="Sara Price"></option>
<option value="Sarah Davidson"></option>
<option value="Sarah Kim"></option>
<option value="Sawyer Archer"></option>
<option value="Sean Cartwright"></option>
<option value="Sebastian Molina"></option>
<option value="Shaun Kerry"></option>
<option value="Shawn Zheng"></option>
<option value="Shihab Ahmed"></option>
<option value="Shreya Jindall"></option>
<option value="Shryans Goyal"></option>
<option value="Sini Koivu"></option>
<option value="Soha Rizvi"></option>
<option value="Sophia Prieto"></option>
<option value="Sophia Zhou"></option>
<option value="Spencer Darwall"></option>
<option value="Steffi Halow"></option>
<option value="Stephanie Agu"></option>
<option value="Stephen Xu"></option>
<option value="Steven Feng"></option>
<option value="Suraj Chandramouli"></option>
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
<option value="Valentina Osorio"></option>
<option value="Valerie Elizondo"></option>
<option value="Victoria Albanese"></option>
<option value="Victoria Johns"></option>
<option value="Vikram Aggarwal"></option>
<option value="Vinay Tummarakota"></option>
<option value="Vy Dang"></option>
<option value="Vy Luu"></option>
<option value="Warren Rose"></option>
<option value="Whitney Ball"></option>
<option value="Whitney Jin"></option>
<option value="Will Ledig"></option>
<option value="Will Ramos"></option>
<option value="Wyatt Cho"></option>
<option value="Yimo Wang"></option>
<option value="Yuin Lu"></option>
<option value="Yuka Aoyama"></option>
<option value="Zarek Lu"></option>
        </datalist>
    </form>
    <p id="pathdisplay" disabled></p>
</body>
</html>