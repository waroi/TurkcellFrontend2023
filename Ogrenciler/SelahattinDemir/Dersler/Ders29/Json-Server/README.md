[Turn Back](../../../)

<h1 align="center">Ders29 - JSON Server</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JSON Server

&#10147; A common use of JSON is to exchange data to/from a web server.

&#10147; When receiving data from a web server, the data is always a string.

&#10147; Parse the data with JSON.parse(), and the data becomes a JavaScript object.

### Sending Data

&#10147; If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:

#### Example

    var myObj = {name: "John", age: 31, city: "New York"};
    var myJSON = JSON.stringify(myObj);
    window.location = "demo_json.php?x=" + myJSON;

### Receiving Data

&#10147; If you receive data in JSON format, you can convert it into a JavaScript object:

#### Example

    var myJSON = '{"name":"John", "age":31, "city":"New York"}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;

### JSON From a Server

&#10147; The`` JSON.parse()`` method can be used to convert a JSON data into a JavaScript object:

#### Example

    <h2>Use the XMLHttpRequest to get the content of a file.</h2>
    <p>The content is written in JSON format, and can easily be converted into a JavaScript object.</p>
    <p id="demo"></p>
    <script>
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
      }
    };
    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send();
    </script>

### Array as JSON

&#10147; When using the ``JSON.parse()`` on JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

#### Example

    JSON returned from a server as an array:

      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
        const myArr = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myArr[0];
        };
      xmlhttp.open("GET", "json_demo_array.txt", true);
      xmlhttp.send();
