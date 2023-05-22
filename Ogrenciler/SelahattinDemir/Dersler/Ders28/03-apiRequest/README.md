[Turn Back](../../../)

<h1 align="center">Ders28 - Javascript Http Request - API</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript API Http Request

&#10147; The XMLHttpRequest object is used to request data from a server.

### Send a Request To a Server

&#10147; To send a request to a server, we use the open() and send() methods of the `XMLHttpRequest` object:

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();

&#10147; The `open()` method specifies the type of request: GET or POST

&#10147; The `send()` method sends the request to the server (used for GET)

### The url - A File On a Server

&#10147; The url parameter of the `open()` method, is an address to a file on a server:

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

&#10147; The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

### Asynchronous - True or False?

&#10148; Server requests should be sent asynchronously.

&#10148; The async parameter of the open() method should be set to true:.

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

&#10148; By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:

- Execute other scripts while waiting for server response
- Deal with the response after the response is ready

<b>Note</b>&#10071; The async parameter is true by default. You can safely remove the third parameter from your code. Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

### GET or POST?

&#10148; GET is simpler and faster than POST, and can be used in most cases.

&#10148; However, always use POST requests when:

- A cached file is not an option (update a file or database on the server).
- Sending a large amount of data to the server (POST has no size limitations).
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

### GET Requests

&#10148; ``GET`` is simpler than POST and can be used in most cases.

#### Example

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();

&#10148; In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:

#### Example

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users?t=" + Math.random());
    xhttp.send();

&#10148; If you want to send information with the method, add the information to the URL:``GET``

#### Example

    xhttp.open("GET", "demo_get.asp?fname=Henry&lname=Ford", true);
    xhttp.send();

### POST Requests

&#10148; ``POST`` is a little trickier than ``GET``.

#### Example

    xhttp.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();

&#10148; To POST data like an HTML form, add an HTTP header with ``setRequestHeader()``. Specify the data you want to send in the ``send()`` method:

#### Example

    xhttp.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");

| Method | Description |
| --- | --- |
| setRequestHeader(header, value) | Adds HTTP headers to the request <br><br> header: specifies the header name <br> value: specifies the header value |

### Synchronous Request

&#10149; To execute a synchronous request, change the third parameter in the open() method to false:

#### Example

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
    xhttp.send();

&#10149; Synchronous request will wait for the request to be sent and for the server to respond before execution continues.

&#10149; If the server is busy or slow, the application will hang or stop.

&#10149; Since the code will wait for server completion, there is no need for an ``onreadystatechange`` function:

#### Example

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
    xhttp.send();
    document.getElementById("demo").innerHTML = xhttp.responseText;

<b>Note</b>&#10071; Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

<b>Note</b>&#10071; Modern developer tools are encouraged to warn about using synchronous requests and may throw an InvalidAccessError exception when it occurs.



## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders28/03-apiRequest/media.gif)
