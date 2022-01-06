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
                    document.getElementById("testdisplay").innerHTML = action + " from " + person1 + " to " + person2
                    document.getElementById("testdisplay").disabled = false
                    document.getElementById("pathdisplay").innerHTML = Geneology.findDistance(person1, person2)
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
            </script>
        </div>
        <datalist id="people">
                <option value="Alan Tapper"></option>
                <option value="Brian Lee"></option>
                <option value="Katie Bablak"></option>
                <option value="Kian Robinson"></option>
                <option value="Arnav Burudgunte"></option>
        </datalist>
    </form>
    <p id="testdisplay" disabled></p>
    <p id="pathdisplay" disabled></p>
</body>
</html>

[Back to main page](./index.md)