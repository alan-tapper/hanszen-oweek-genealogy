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
                    document.getElementById("pathdisplay").innerHTML = findDistance(person1, person2)
                }
            </script>
            <script type="module" src="./geneology.js"></script>
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