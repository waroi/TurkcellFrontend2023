[Turn Back](../../../)

<h1 align="center">Ders29 - Javascript Async-Await</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Async

&#10147; "async and await make promises easier to write"

&#10147; "``async`` makes a function return a Promise"

&#10147; "``await`` makes a function wait for a Promise"

### Async Syntax

&#10147; The ``async`` keyword before a function has two effects:

- Makes it always return a promise.
- Allows ``await`` to be used in it.

&#10147; The ``await`` keyword before a promise makes JavaScript wait until that promise settles, and then:

- If it's an error, the exception is generated — same as if ``throw error`` were called at that very place.
- Otherwise, it returns the result.

#### Example

    async function myFunction() {
      return "Hello";
    }
    Is the same as:

    function myFunction() {
      return Promise.resolve("Hello");
    }

&#10147; Here is how to use the Promise:

    myFunction().then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

#### Example

    async function myFunction() {
      return "Hello";
    }
    myFunction().then(
      function(value) {myDisplayer(value);},
      function(error) {myDisplayer(error);}
    );

&#10147; Or simpler, since you expect a normal value (a normal response, not an error):

#### Example

    async function myFunction() {
      return "Hello";
    }
    myFunction().then(
      function(value) {myDisplayer(value);}
    );

### Await Syntax

&#10148; The keyword ``await`` makes JavaScript wait until the promise returns a result.

&#10148; It has to be noted that it only makes the async function block wait and not the whole program execution.

&#10148; The await keyword can only be used inside an async function.

&#10148; The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

    let value = await promise;

#### Example

    Basic Syntax
      async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
          resolve("I love You !!");
        });
        document.getElementById("demo").innerHTML = await myPromise;
      }

      myDisplay();

<b>Note</b>&#10071; The two arguments (resolve and reject) are pre-defined by JavaScript.
We will not create them, but call one of them when the executor function is ready.
Very often we will not need a reject function.

    Example without reject
      async function myDisplay() {
        let myPromise = new Promise(function(resolve) {
          resolve("I love You !!");
        });
        document.getElementById("demo").innerHTML = await myPromise;
      }

      myDisplay();

    Waiting for a Timeout
      async function myDisplay() {
        let myPromise = new Promise(function(resolve) {
          setTimeout(function() {resolve("I love You !!");}, 3000);
        });
        document.getElementById("demo").innerHTML = await myPromise;
      }

      myDisplay();

    Waiting for a File
      async function myDisplay() {
        let myPromise = new Promise(function(resolve) {
          fetch("filename.txt")
          .then(response => response.text())
          .then(text => resolve(text));
        });
        document.getElementById("demo").innerHTML = await myPromise;
      }

      myDisplay();

### Browser Support

&#10148; ECMAScript 2017 introduced the JavaScript keywords async and await.

&#10148; The following table defines the first browser version with full support for both:

| ![alt text](https://www.w3schools.com/images/compatible_chrome.png) | ![alt text](https://www.w3schools.com/images/compatible_edge.png) | ![alt text](https://www.w3schools.com/images/compatible_firefox.png) | ![alt text](https://www.w3schools.com/images/compatible_opera.png) | ![alt text](https://www.w3schools.com/images/compatible_safari.png) |
| --- | --- | --- | --- | --- |
| 55 | 15 | 52 | 11 | 42 |
| Dec 2016 | Apr 2017 | Mar 2017 | Sep 2017 | Dec 2016 |



## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders29/Async-Await/media.jpg)
