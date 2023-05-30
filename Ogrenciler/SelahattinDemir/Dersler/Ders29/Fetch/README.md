[Turn Back](../../../)

<h1 align="center">Ders29 - Javascript Fetch API</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Fetch API

&#10147; The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

&#10147; 😀 No need for XMLHttpRequest anymore.

### Browser Support

&#10147; The numbers in the table specify the first browser versions that fully support Fetch API:

| ![alt text](https://www.w3schools.com/images/compatible_chrome.png) | ![alt text](https://www.w3schools.com/images/compatible_edge.png) | ![alt text](https://www.w3schools.com/images/compatible_firefox.png) | ![alt text](https://www.w3schools.com/images/compatible_opera.png) | ![alt text](https://www.w3schools.com/images/compatible_safari.png) |
| :----: | :--: | :-----: | :---: | :----: |
|  42.0  |  14  |   40   |  29   |   10.1   |
| Apr 2015 | Aug 2015 | Aug 2015 | Apr 2014 | Mar 2012 |

### A Fetch API Example

&#10147; The example below fetches a file and displays the content:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <p id="demo"></p>

    <script>
    fetch("demo_test.txt")
    .then(response => response.text())
    .then(data => {
      document.getElementById("demo").innerHTML = data;
    });
    </script>

    </body>
    </html>

&#10147; Since Fetch is based on async and await, the example above might be easier to understand like this:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <p id="demo"></p>

    <script>
    async function fetchAsync () {
      // await response of fetch call
      let response = await fetch('demo_test.txt');
      // only proceed once promise is resolved
      let data = await response.text();
      // only proceed once second promise is resolved
      return data;
    }

    // trigger async function
    // log response or catch error of fetch promise
    fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))
    </script>

    </body>
    </html>

### Fetch API Syntax

&#10147; The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

&#10147; You can also optionally pass in an init options object as the second argument (see Request).

&#10147; The basic syntax is:

    fetch(url, options);

&#10147; The url parameter defines the URL of the resource you want to fetch.

&#10147; The options parameter is an optional object that you can use to control a number of different settings:

- method: The request type, e.g., GET, POST, PUT, DELETE, etc.
- headers: Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values.
- body: Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, or USVString object. Note that a request using the GET or HEAD method cannot have a body.
- mode: The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors.
- credentials: The request credentials you want to use for the request: omit, same-origin, or include. The default is same-origin.
- cache: The cache mode you want to use for the request: default, no-store, reload, no-cache, force-cache, or only-if-cached.
- redirect: The redirect mode to use: follow, error, or manual. The default is follow.
- referrer: A USVString specifying no-referrer, client, or a URL. The default is client.
- integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAeR7Ii8iipg95buWJy+g8=).

### Fetch API Response

&#10148; The Response interface of the Fetch API represents the response to a request.

&#10148; You can create a new Response object using the Response.Response() constructor, but you are more likely to encounter a Response object being returned as the result of another API operation—for example, a service worker Fetchevent.respondWith, or a simple global fetch() call.

&#10148; The basic syntax is:

    new Response(body, init);

&#10148; The body parameter takes a BodyInit object, which in this case is a string (for text responses) or a typed array.

&#10148; The init parameter is an optional object containing any custom settings that you want to apply to the request. The possible options are:

- status: The HTTP status code, e.g., 200.
- statusText: The HTTP status message, e.g., OK.
- headers: A Headers object, an object literal, or an array of two-item arrays to specify the request headers.
- url: The URL of the response.

### Fetch API Request

&#10148; The Request interface of the Fetch API represents a resource request.

&#10148; You can create a new Request object using the Request.Request() constructor, but you are more likely to encounter a Request object being returned as the result of another API operation—for example, a service worker Fetchevent.request or a Cache API match() call.

&#10148; The basic syntax is:

    new Request(input, init);

&#10148; The input parameter can be a URL, a Request object, or an object literal containing any custom settings that you want to apply to the request.

&#10148; The init parameter is an optional object containing any custom settings that you want to apply to the request. 

### Fetch API Headers

&#10148; The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing.

&#10148; A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs. You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence.

&#10148; You can create a new Headers object using the Headers.Headers() constructor, but you are more likely to encounter a Headers object being returned as the result of another API operation—for example, a service worker Fetchevent.request or a HeadersInit object.

&#10148; The basic syntax is:

    new Headers(init);

&#10148; The init parameter is an optional object containing any HTTP headers that you want to pre-populate your Headers object with. Each header must be provided as a name/value pair in the init object.

### Fetch API Examples

&#10147; The following example fetches an image and displays it on the page:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <img src="" alt="">

    <script>
    fetch('coffee.jpg')
    .then(response => response.blob())
    .then(images => {
      document.querySelector('img').src = URL.createObjectURL(images);
    });
    </script>

    </body>
    </html>

&#10147; The following example fetches a JSON file and displays the data:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <p id="demo"></p>

    <script>
    fetch('demo.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("demo").innerHTML = data.name;
    });
    </script>

    </body>
    </html>

&#10147; The following example fetches a text file and displays the data:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <p id="demo"></p>

    <script>
    fetch('demo_test.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("demo").innerHTML = data;
    });
    </script>

    </body>
    </html>

&#10147; The following example fetches an HTML file and displays the data:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>Using the fetch API</h2>

    <p id="demo"></p>

    <script>
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById("demo").innerHTML = data.title;
    });
    </script>

    </body>
    </html>

### Fetch API Methods

&#10147; The Fetch API provides several JavaScript methods that you can use to initiate and manipulate requests and responses.

&#10147; The following table lists the methods available and their purpose:

| Method | Description |
| :----: | :---------: |
| fetch() | Initiates a request to the server hosting the resource. |
| clone() | Creates a clone of a Response object. |
| arrayBuffer() | Returns a promise that resolves with an ArrayBuffer. |
| blob() | Returns a promise that resolves with a Blob. |
| formData() | Returns a promise that resolves with a FormData object. |
| json() | Returns a promise that resolves with a JSON object. |
| text() | Returns a promise that resolves with a USVString (text). |

### Fetch API Properties

&#10147; The Fetch API provides several JavaScript properties that you can use to access different parts of the request and response process.

&#10147; The following table lists the properties available and their purpose:

| Property | Description |
| :------: | :---------: |
| Headers | Returns a Headers object containing the associated headers of the request or response (e.g., Headers.headers). |
| Request | Returns a Request object containing the information about the request (e.g., Request.method). |
| Response | Returns a Response object containing the information about the response (e.g., Response.status). |

### Fetch API Events

&#10147; The Fetch API provides several JavaScript events that you can use to hook into the request and response process.

&#10147; The following table lists the events available and their purpose:

| Event | Description |
| :---: | :---------: |
| fetch | Fired when a request is sent to the server (before a response is received). |
| fetchstart | Fired when the request starts (when the request is sent to the server). |
| fetchend | Fired when the request completes (either in success or failure). |
| fetchsuccess | Fired when the request succeeds. |
| fetchfail | Fired when the request fails. |
| fetchabort | Fired when the request is aborted. |
| fetcherror | Fired when the request encounters an error. |
| fetchtimeout | Fired when the request times out. |
| fetchloadstart | Fired when the request starts to load. |
| fetchprogress | Fired periodically when the request is in progress. |
| fetchload | Fired when the request has successfully completed. |
| fetchloadend | Fired when the request has completed (either in success or failure). |


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders29/Fetch/media.jpg)
