[Turn Back](../../../)

<h1 align="center">Ders28 - Javascript Http Request</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript XML HttpRequest

&#10147; All modern browsers have a built-in `XMLHttpRequest` object to request data from a server.

### The XMLHttpRequest Object

&#10147; The `XMLHttpRequest` object can be used to request data from a web server.

&#10147; The `XMLHttpRequest` object is a developers dream, because you can:

- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background

### Sending an XMLHttpRequest

&#10147; To send a request to a server, we use the open() and send() methods of the `XMLHttpRequest` object:

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "filename", true);
    xhttp.send();

&#10147; The `open()` method specifies the type of request: GET or POST

&#10147; The `send()` method sends the request to the server (used for GET)

### Example Explained

&#10148; Create an `XMLHttpRequest` object

    var xhttp = new XMLHttpRequest();

&#10148; The `onreadystatechange` property specifies a function to be executed every time the status of the XMLHttpRequest object changes:

    xhttp.onreadystatechange = function()

&#10148; When `readyState` property is 4 and the `status` property is 200, the response is ready:

    if (this.readyState == 4 && this.status == 200)

&#10148; The `responseText` property returns the server response as a text string.

&#10148; The text string can be used to update a web page:

    document.getElementById("demo").innerHTML = xhttp.responseText;


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders28/01-txtRequest/media.gif)
