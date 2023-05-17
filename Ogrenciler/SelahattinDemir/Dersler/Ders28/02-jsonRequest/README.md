[Turn Back](../../../)

<h1 align="center">Ders28 - Javascript Http Request - Json</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript JSON Http Request

&#10147; All modern browsers have a built-in `XMLHttpRequest` object to request data from a server.

&#10147; A common use of JSON is to read data from a web server, and display the data in a web page.

### JSON Example

&#10147; This example reads a menu from `myTutorials.tx`t, and displays the menu in a web page:

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Use the XMLHttpRequest to get the content of a file.</h2>

    <div id="id01"></div>

    <script>
    var xmlhttp = new XMLHttpRequest();
    var url = "myTutorials.txt";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' +
            arr[i].display + '</a><br>';
        }
        document.getElementById("id01").innerHTML = out;
    }
    </script>

    </body>
    </html>

### Example Explained

<b>1: Create an array of objects.</b>

&#10147; Use an ``array literal`` to declare an ``array`` of ``objects``.

&#10147; Give each object two properties: ``display`` and ``url``.

&#10147; Name the array ``myArray``:

#### myArray

    var myArray = [
    {
    "display": "JavaScript Tutorial",
    "url": "https://www.w3schools.com/js/default.asp"
    },
    {
    "display": "HTML Tutorial",
    "url": "https://www.w3schools.com/html/default.asp"
    },
    {
    "display": "CSS Tutorial",
    "url": "https://www.w3schools.com/css/default.asp"
    }
    ]

<b>2: Create a JavaScript function to display the array.</b>

&#10147; Create a function myFunction() that loops the array objects, and display the content as HTML links:

#### myFunction()

    function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
    }

&#10147; Call ``myFunction() ``with ``myArray`` as argument:

### Example

    myFunction(myArray);


<b>3: Create a text file</b>`

&#10147; Put the ``array literal`` in a file named ``myTutorials.txt:``

#### myTutorials.txt

    [
    {
    "display": "JavaScript Tutorial",
    "url": "https://www.w3schools.com/js/default.asp"
    },
    {
    "display": "HTML Tutorial",
    "url": "https://www.w3schools.com/html/default.asp"
    },
    {
    "display": "CSS Tutorial",
    "url": "https://www.w3schools.com/css/default.asp"
    }
    ]

<b>4: Read the text file with an XMLHttpRequest</b>

&#10147; Write an ``XMLHttpRequest`` to read the text file, and use ``myFunction()`` to display the array:

#### XMLHttpRequest

    var xmlhttp = new XMLHttpRequest();
    var url = "myTutorials.txt";

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

## The XMLHttpRequest Object

&#10148; All modern browsers support the object.``XMLHttpRequest``

&#10148; The object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.``XMLHttpRequest``

### XMLHttpRequest Object Methods

| Method | Description | 
| --- | --- |
| new XMLHttpRequest() | Creates a new XMLHttpRequest object |
| abort() | Cancels the current request |
| getAllResponseHeaders() | Returns header information |
| getResponseHeader() | Returns specific header information |
| open(method, url, async, user, psw) | Specifies the request method: the request type GET or POST url: the file location async: true (asynchronous) or false (synchronous) user: optional user name psw: optional password |
| send() | Sends the request to the server Used for GET requests |
| send(string) | Sends the request to the server Used for POST requests |
| setRequestHeader() | Adds a label/value pair to the header to be sent |

### XMLHttpRequest Object Properties

| Property | Description |
| --- | --- |
| onreadystatechange | Defines a function to be called when the readyState property changes |
| readyState | Holds the status of the XMLHttpRequest. Changes from 0 to 4: 0: request not initialized 1: server connection established 2: request received 3: processing request 4: request finished and response is ready |
| responseText | Returns the response data as a string |
| responseXML | Returns the response data as XML data |
| status | Returns the status-number of a request 200: "OK" 403: "Forbidden" 404: "Not Found" For a complete list go to the <a href="https://www.w3schools.com/tags/ref_httpmessages.asp">Http Messages Reference</a> |
| statusText | Returns the status-text (e.g. "OK" or "Not Found") |

### The onreadystatechange Property

&#10148; The property holds the status of the XMLHttpRequest.``readyState``

&#10148; The property defines a callback function to be executed when the readyState changes.``onreadystatechange``

&#10148; The property and the properties hold the status of the XMLHttpRequest object.``status statusText``

| Property | Description |
| --- | --- |
| onreadystatechange | Defines a function to be called when the readyState property changes |
| readyState | Holds the status of the XMLHttpRequest. Changes from 0 to 4: 0: request not initialized 1: server connection established 2: request received 3: processing request 4: request finished and response is ready |
| responseText | Returns the response data as a string |
| responseXML | Returns the response data as XML data |
| status | Returns the status-number of a request 200: "OK" 403: "Forbidden" 404: "Not Found" For a complete list go to the <a href="https://www.w3schools.com/tags/ref_httpmessages.asp">Http Messages Reference</a> |
| statusText | Returns the status-text (e.g. "OK" or "Not Found") |

&#10148; The function is called every time the readyState changes. ``onreadystatechange``

&#10148; When is 4 and status is 200, the response is ready:``readyState``

<b>Note</b>&#10071; The event is triggered four times (1-4), one time for each change in the readyState.``onreadystatechange``


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders28/02-jsonRequest/media.gif)
