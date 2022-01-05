<html>
<head>
    <h1>Geneology Calculator</h1>
    <!--
    <script type="module" src="main.js"></script>
    <script type="module" src="geneology.js"></script>
    <script type="module" src="data.js"></script>
    -->
</head>
<body>
    <form>
        <div>
            <label>Action</label>
            <select name="action" id="action">
                <option id="find-path" value="find-path">Find Path</option>
                <option id="find-distance" value="find-distance">Find Distance</option>
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
            <button type="button" id="button">Submit</button>
        </div>
        <datalist id="people">
                <option value="Internet Explorer"></option>
                <option value="Firefox"></option>
                <option value="Chrome"></option>
                <option value="Opera"></option>
                <option value="Safari"></option>
        </datalist>
    </form>
</body>
</html>

[Back to main page](./index.md)