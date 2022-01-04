<head>
    <h1>Geneology Calculator</h1>
    <script type="module" src="../main.js"></script>
    <script type="module" src="../geneology.js"></script>
    <script type="module" src="../data.js"></script>
</head>
<body>
    <form action="">
        <div>
            <input type="radio" id="find-path" name="action" value="find-path">
            <label for="find-path">Find Path</label><br>
            <input type="radio" id="find-distance" name="action" value="find-distance">
            <label for="find-distance">Find Distance</label><br>
        </div>
        <div>
            <label for="person1name">Person 1</label>
            <input type="text" id="person1name" name="person1name" list="people">
        </div>
        <div>
            <label for="person2name">Person 2</label>
            <input type="text" id="person2name" name="person1name" list="people">
        </div>
        <div>
            <label for="submit">Submit</label>
            <input type="submit" id="submit">
        </div>
        <datalist id="people">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
        </datalist>
        <br>
    </form>
</body>

[Back to main page](./index.md)