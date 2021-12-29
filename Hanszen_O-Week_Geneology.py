from collections import deque

parentsOf = {}

familyOf = {}

#tree building functions

#adds name with parents given by parentsList
def addPerson(name, parentList):
    parentsOf[name] = parentList

#adds sibling as a sibling of refrence
def addSibling(sibling, source):
    addPerson(sibling, parentsOf[source])

#adds the members of siblings as siblings of source
def addSiblings(siblings, source):
    for sibling in siblings:
        addSibling(sibling, source)

#adds parent to source's list of parents
def addParent(parent, source):
    parentsOf[source].append(parent)

#adds an entire O-Week Group
def addOWeekGroup(advisors, newStudents):
    for ns in newStudents:
        addPerson(ns, advisors)

#other helper functions

#returns the children of source
def getChildren(source):
    toReturn = []
    for name in parentsOf.keys():
        if source in parentsOf[name]:
            toReturn.append(name)
    return toReturn

#returns the parents of source
def getParents(source):
    if source in parentsOf.keys():
        return parentsOf[source]
    return []

#returns the cos of source
def getCos(source):
    toReturn = []
    for advisingTeam in parentsOf.values():
        if source in advisingTeam:
            for advisor in advisingTeam:
                toReturn.append(advisor)
    toReturn = removeDuplicates(toReturn)
    while source in toReturn:
        toReturn.remove(source)
    return toReturn

#returns the siblings of source
def getSiblings(source):
    toReturn = []
    if source in parentsOf.keys():
        for name in parentsOf.keys():
            if parentsOf[source] == parentsOf[name]:
                toReturn.append(name)
    while source in toReturn:
        toReturn.remove(source)
    return toReturn

#helper function for getCos
def removeDuplicates(nameList):
    toReturn = []
    for name in nameList:
        if name not in toReturn:
            toReturn.append(name)
    return toReturn

#returns a list of everyone in the tree
def getEveryone():
    people = []
    for person in parentsOf.keys():
        people.append(person)
    for parents in parentsOf.values():
        for person in parents:
            people.append(person)
    people = removeDuplicates(people)
    return people

#returns the immediate family of source
def getImmediateFamily(source):
    family = []
    for parent in getParents(source):
        family.append(parent)
    for child in getChildren(source):
        family.append(child)
    for sibling in getSiblings(source):
        family.append(sibling)
    for co in getCos(source):
        family.append(co)
    return family

#returns a list of everyone related to source in depth or less steps
def getAllRelatives(source, depth):
    toReturn = []
    for name in getEveryone():
        if findDistance(source, name) != None:
            if findDistance(source, name) <= depth:
                toReturn.append(name)
    return toReturn

#returns the average distance from everyone in the network
def baconNumber(source):
    distList = [findDistance(source, name) for name in getEveryone()]

    sum = 0
    num = 0
    
    for dist in distList:
        if dist != None:
            sum += dist
            num += 1
    
    return sum / num

#print functions

#prints everyone
def printEveryone():
    for person in getEveryone():
        print(person)
    print(str(len(getEveryone())) + " people in the Hanszen O-Week Geneology Project")

#prints the immediate family of source
def printImmediateFamily(source):
    
    parentString = "Parents: "
    if len(getParents(source)) == 0:
        parentString += "None  "
    for parent in getParents(source):
        parentString += parent + ", "
    parentString = parentString[:-2]
    
    childString = "Children: "
    if len(getChildren(source)) == 0:
        childString += "None  "
    for child in getChildren(source):
        childString += child + ", "
    childString = childString[:-2]

    siblingString = "Siblings: "
    if len(getSiblings(source)) == 0:
        siblingString += "None  "
    for sibling in getSiblings(source):
        siblingString += sibling + ", "
    siblingString = siblingString[:-2]

    coString = "Cos: "
    if len(getCos(source)) == 0:
        coString += "None  "
    for co in getCos(source):
        coString += co + ", "
    coString = coString[:-2]

    print("Immediate Family of " + source + ":")
    print(parentString)
    print(childString)
    print(siblingString)
    print(coString)

#prints relatives at every depth
def printRelativesAtDepths(source):
    distList = [findDistance(source, name) for name in getEveryone()]

    num = [0 for i in range(10)]

    for dist in distList:
        if dist != None:
            num[dist] += 1

    for n in num:
        print(n)

#prints the relatives of source that are depth away or less
def printAllRelatives(source, depth):
    for relative in getAllRelatives(source, depth):
        print(relative)

#prints the number of relatives of source that are depth away or less
def printNumRelatives(source, depth):
    print(len(getAllRelatives(source, depth)))

#other

#finds the relation between name and source
def findRelation(name, source):
    #immediate relation
    if source in parentsOf.keys() and name in parentsOf[source]:
        return "Parent"

    if name in parentsOf.keys() and source in parentsOf[name]:
        return "Child"

    if source in parentsOf.keys() and name in parentsOf.keys() and parentsOf[name] == parentsOf[source]:
        return "Sibling"

    for advisingTeam in parentsOf.values():
        if (source in advisingTeam) and (name in advisingTeam):
            return "Advised Together"

    #return "No close relation

#returns the distances of everyone and their predecessor from the point of view of source
def BFSMap(source):
    
    q = deque()

    dist = {}
    for person in getEveryone():
        dist[person] = None
    dist[source] = 0

    predecessor = {}
    for person in getEveryone():
        predecessor[person] = None

    q.append(source)

    while len(q) > 0:
        u = q.popleft()
        for v in familyOf[u]:
                if dist[v] == None:
                    dist[v] = 1 + dist[u]
                    predecessor[v] = u
                    q.append(v)
    
    return dist, predecessor

#finds the shortest path from source to name
def findPath(source, name):
    dist, predecessor = BFSMap(source)

    path = [name]
    while path[0] != source:
        path.insert(0, predecessor[path[0]])
    
    return path

#finds the distance from source to name
def findDistance(source, name):
    dist, predecessor = BFSMap(source)
    return dist[name]

#print-friendly path
def printPath(source, name):
    toReturn = []
    
    path = findPath(source, name)

    for i in range(1, len(path)):
        rel = findRelation(path[i - 1], path[i])
        
        if rel == "Sibling":
            toReturn.append(path[i - 1] + " is " + path[i] + "'s sibling")
        
        if rel == "Parent":
            toReturn.append(path[i - 1] + " is " + path[i] + "'s parent")
        
        if rel == "Child":
            toReturn.append(path[i - 1] + " is " + path[i] + "'s child")
        
        if rel == "Advised Together":
            toReturn.append(path[i - 1] + " advised with " + path[i])
    
    for line in toReturn:
        print(line)

#data

#2021 O-Week Groups
addOWeekGroup(["Alan Tapper", "Chloe Hur", "Leigh Gabriely", "Matthew Zamarripa"], ["Connor Taylor", "Henry Cabrera", "Tony Tan", "Ray Xiang", "Max Kovalchick", "Katherine Jeng", "Yimo Wang", "Tanya Jain", "Gabrielle Allen", "Caroline Tanner"])
addOWeekGroup(["Katie Bablak", "Hope Moustakakis", "Anushka Agrawal", "John Cook"], ["Nitin Reganti", "Warren Rose", "Laura Yee", "Karen Marquez", "Adara Toran", "Aryana Suhartono", "Darius Huang", "Emerson Coronel", "Mark Lopatofsky", "Esha Patel"])
addOWeekGroup(["Marc Armena", "Grace Kneidel", "Khondker Salim", "Charlotte Cohen"], ["Natalie Byron", "Ava White", "Vy Luu", "Priya Tirumala", "David Kurp", "Daniel Stulski", "Taeho Choe", "Kausar Alkaderi", "Ai Bunchatheravate"])
addOWeekGroup(["Julia Englehardt", "Anthony Guzzo", "Corey Donovan", "Sini Koivu"], ["Emily Pena", "Ellie Cha", "Darcey Lonsdale", "Nayna Nambiar", "Sara Price", "Joseph Flores", "Sam Sarver", "Suraj Chandramouli", "Noah Hight"])
addOWeekGroup(["Gia Braddock", "Daniel Rothfusz", "Dylan DuCharme", "Mabel Tang"], ["Maddy Garrity", "Bella Bartos", "Adi Zytek", "Michelle Fox", "Yuin Lu", "Peter Reynolds", "Joseph Liu", "Liam Waite", "Ammar Siddiqi", "Brian Seo"])
addOWeekGroup(["Ben Murdoch", "Aaron Lin", "Sarah Kim", "Victoria Johns"], ["Crystal Unegbu", "Danika Li", "Daniela Covarrubias", "Lauren Hu", "Thara Venkateswaran", "Emery Engling", "Jonathan Seyoum", "Zarek Lu", "Arturo Rodriguez Lopez", "James Belanger"])
addOWeekGroup(["Sadie Siegel", "Madhu Venkatesalu", "Jarrett Prchal", "Arvind Ramesh"], ["Sarah Davidson", "Whitney Ball", "Jo Harikrishna", "Genesis Hahn", "Riya Pagilla", "Marcus Williams", "Lucas Newman", "Jordan Contreras", "Nikhil Samudrala", "Ken Chen"])
addOWeekGroup(["Temi Dada", "Alp Yakici", "Ridhi Gari", "Andrew Li"], ["Stephanie Agu", "Leora Maksoud", "Basma Bedawi", "Kaylah Patel", "Jiwon Han", "Brian Baskin", "Shihab Ahmed", "Kai Cowin", "Hari Gotluru", "Bill Nguyen"])
addOWeekGroup(["Praneel Joshi", "Amanda Mae Ashley", "Shawn Zheng", "Maanvi Thawani"], ["Hannah Son", "Priscilla Ibrahim", "Christina Wong", "Victoria Albanese", "Kenna Dixon", "Will Ramos", "Javi Milagro Caro", "Josh Yu", "Daniel Brown", "Melvin Zarghooni"])
addOWeekGroup(["Claire Xu", "Moses Glickman", "McKenna Tanner", "Carlos Rivera"], ["Claire Brix", "Azhariya Ellis", "Lily Remington", "Hannah Kim", "Christy Deng", "Stephen Xu", "Jay Folmar", "Dillon Akerman", "Jonah Lubin", "Wyatt Cho"])
addOWeekGroup(["Jackie Wu", "Sara Mansfield", "Isabelle Scott", "Jose Oviedo"], ["Lillian Sims", "Emily Wu", "Alison Qiu", "Celeste Colato", "Dylan Grant", "Byron Hart", "Pablo Solano", "Chuck Wells", "David Zhu"])
addOWeekGroup(["Christa Westheimer", "Valentina Osorio", "Bert Odinet", "Juan Rubio"], ["Angelina Puente-Perez", "Julia Hanson", "Laney Schewgman", "Anagha Alapati", "Michelle Pham", "Nathaniel Moriss", "Sebastian Molina", "Ben Montag", "Daniel Zhao"])

#2020 O-Week Groups
addOWeekGroup(["Alp Yakici", "Amanda Mae Ashley", "Cole Ponsi", "Tessa Schreiber"], ["Alan Tapper", "Brian Lee", "Marc Armena", "Noah Elzner", "Astra Burke", "Reece Lusich", "Valentina Osorio", "Hemish Thakkar", "Jun-Ha Jung"])
addOWeekGroup(["Mason Reece", "Radhika Patel", "Alizay Azeem", "Abby Webb"], ["Kian Robinson", "Alex Holzbach", "Anushka Agrawal", "Ella Price", "Tammy Feng"])
addOWeekGroup(["Syed Shams", "Daniel Wang", "Sara Mansfield", "Cynthia Chen"], ["Yuka Aoyama", "McKenna Tanner", "Arielle Sanford", "Maanvi Thawani", "Corey Donovan", "Jason Nguyen", "Adam He"])
addOWeekGroup(["Amy Lin", "Michelle Martinez", "Izzi Karohl", "Daniel Rothfusz"], ["Arnav Burudgunte", "Sean Cartwright", "Anthony Weeks", "Anna Alves", "Mainavi Reddy", "Shreya Jindall", "Amanda Hogan"])
addOWeekGroup(["Tre Henson", "Dani Knobloch", "Saniya Gayake", "Ben Burstain"], ["Spencer Darwall", "Ryan Mbuashu-Ndip", "Ridhi Gari", "Makayla Brown"])
addOWeekGroup(["Piper Harris", "Anthony Guzzo", "Steven Feng", "Sanjana Krishnan"], ["Andrew Bare", "Jaime Tellez", "Dylan DuCharme", "Colin Lawrence", "Margaret Li", "Elena Carmichael", "Carly Ngo", "Jessica Suh"])
addOWeekGroup(["Juan Serrano", "Lauren Ivory", "Julie Street", "Bianca Chen"], ["Jessica Opsahl-Ong", "Andrew Murray", "Ryan Babe", "Albert Wan", "Tiffany Tang", "Santi Parra-Vargas", "Jose Acuna Valenzuela", "Kaylah Cantu", "Chuk Uzowihe"])
addOWeekGroup(["Vivian Wong", "Ginnie Okafor", "Felix Desimoni", "Bhavana Kunisetty"], ["ns3"])
addOWeekGroup(["Rose Click", "Tanuj Prajapati", "Armando Amigon", "Soha Rizvi"], ["Isabelle Williams", "Natalie Pellette", "Izzi Childers", "Shaun Kerry"])
addOWeekGroup(["Lila Frenkel", "Kourtney Kanja", "Bert Odinet", "Makayla Franco"], ["Sarah Kim", "Maggie Han", "Robert Heeter", "Eric Savarese", "Fred Bush", "Khondker Salim", "Ebube Ukabiala"])
addOWeekGroup(["Eric Torres", "Matthew Brun", "Emily Chang", "Nana Mensah-Bosu"], ["Ricardo Robles", "Adam Cohen", "Daniel Cho", "Bruce Xu", "Valerie Elizondo"])
addOWeekGroup(["Shawn Zheng", "Hannah Meeks", "Lexi Ellerbe", "George Liu"], ["ns7"])

#2019 O-Week Groups
addOWeekGroup(["Matthew Brun", "Lisa Shi", "Hannah Vincent", "Andrew Abhikhaled"], ["Katie Bablak", "Kourtney Kanja", "Jesus Galvan", "Kieren Boyd", "Tara Simpson-Sullivan", "Roscoe Bussell", "Bill Qian", "Juan Rubio"])
addOWeekGroup(["Bert Odinet", "Bharathvi Selvan", "Vy Dang", "Shryans Goyal"], ["Andrew Li", "Arvind Ramesh", "Ginny Qian", "Divya Venkatesh", "Ella Hoyt", "Sophia Zhou"])
addOWeekGroup(["Amanda Yang", "Piper Harris", "Nikit Venishetty", "Steffi Halow"], ["CG Marinelli", "Sawyer Archer", "Janya Ram", "Joanna Wang", "Vinay Tummarakota", "Ryan Knightly", "Aurian Maleki"])
addOWeekGroup(["Chris Lee", "Vikram Aggarwal", "Salonee Shah", "Alyson Resnick"], ["Amber Pitre", "Dani Knobloch", "Madhu Venkatesalu", "Andre Wasem", "Can Erdogan", "Truman Archer", "Adam Bobak"])
addOWeekGroup(["Jae Kim", "Caitlin Simcox", "Jeel Mehta", "Nishant Pradhan"], ["Aaron Lin", "Sini Koivu", "Mabel Tang", "Marc Shen"])
addOWeekGroup(["Juan Serrano", "Rose Click", "Chris Villareal", "Sam Fowler"], ["Sara Mansfield", "Ashley Noh", "Sophia Prieto", "Jesus Galvan", "Brett Bussey"])
addOWeekGroup(["Will Ledig", "Esther Choi", "Whitney Jin", "Brandon Chow"], ["Tanuj Prajapati", "Bianca Chen", "Ari Vilker", "Ginnie Okafor", "Alex Eklin", "Luna Cortelezzi", "Jonathan Sheng", "Amanda Dominguez"])


#builds familyOf
for person in getEveryone():
    familyOf[person] = getImmediateFamily(person)


#testing


#printEveryone()

#print(BFSMap("Alan Tapper"))

#print(findPath("Alan Tapper", "Kian Robinson"))

#printRelativesAtDepths("Alan Tapper")

printPath("Katie Bablak", "Bianca Chen")