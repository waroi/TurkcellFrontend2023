[Turn Back](../../../)

<h1 align="center">Ders29 - Javascript Promises</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Promises

&#10147; "I Promise a Result!"

&#10147; "Producing code" is code that can take some time

&#10147; "Consuming code" is code that must wait for the result

&#10147; A Promise is a JavaScript object that links producing code and consuming code

&#10147; "Producing code" is responsible for doing something that will take time (e.g. fetching data)

&#10147; "Consuming code" is responsible for doing something with the result (e.g. displaying data)

&#10147; A Promise is a _JavaScript object_ that links producing code and consuming code (like a _"message box"_)

&#10147; JavaScript _executes the_ _producing code_ _and_ _then_ _passes the result to the consuming code_ (like a _"message"_)

### JavaScript Promise Object

&#10147; A JavaScript Promise object contains both the producing code and calls to the consuming code:

#### Example

    let myPromise = new Promise(function(myResolve, myReject) {
      // "Producing Code" (May take some time)

      myResolve(); // when successful
      myReject();  // when error
    });
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

&#10147; When the producing code obtains the result, it should call one of the two callbacks:

- `myResolve(value)` _if the job finished successfully_
- `myReject(error)` _if an error occurred_

&#10147; The `myPromise.then()` method returns a Promise. It takes up to two arguments: `callback` functions for the success and failure cases of the Promise.

### Promise Object Properties

&#10147; A JavaScript Promise object can be:

- _Pending_
- _Fulfilled_
- _Rejected_

&#10147; The Promise object supports two properties: `state` and `result`:

- `state` _- tracks the_ _promise's_ _state: pending, fulfilled, or rejected_
- `result` _- stores the result of the_ _promise, if any_

- While a Promise object is "pending" (working), the result is undefined.

- When a Promise object is "fulfilled", the result is a value.

- When a Promise object is "rejected", the result is an error object.

 | myPromise.state | myPromise.result |
| --------------- | ---------------- |
| "pending"       | undefined        |
| "fulfilled"     | a value          |
| "rejected"      | an error object  |

<b>Note</b>&#10071; You cannot access the Promise properties ``state`` and ``result.`` You must use a Promise method to handle promises.

### Promise How To

&#10147; Here is how to use a Promise:

    myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
    );

&#10147; The `then()` method takes two arguments, both are callback functions for the success and failure cases of the Promise.

&#10147; The first argument is called if the promise is fulfilled, and the second argument is called if the promise is rejected.

#### Example

    function myDisplayer(some) {
      document.getElementById("demo").innerHTML = some;
    }

    let myPromise = new Promise(function(myResolve, myReject) {
      let x = 0;

    // The producing code (this may take some time)

      if (x == 0) {
        myResolve("OK");
      } else {
        myReject("Error");
      }
    });

    myPromise.then(
      function(value) {myDisplayer(value);},
      function(error) {myDisplayer(error);}
    );

### JavaScript Promise Example

&#10148; To demonstrate the use of promises, we will use the callback examples from the previous chapter:

- Waiting for a Timeout
- Waiting for a File

### Waiting for a Timeout

#### Example Using Callback

    setTimeout(function() { myFunction("I love You !!!"); }, 3000);

    function myFunction(value) {
      document.getElementById("demo").innerHTML = value;
    }

#### Example Using Promise

    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });

    myPromise.then(function(value) {
       document.getElementById("demo").innerHTML = value;
    });

### Waiting for a File

#### Example Using Callback

    function getFile(myCallback) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          myCallback(req.responseText);
        } else {
          myCallback("Error: " + req.status);
        }
      }
      req.send();
    }

    getFile(myDisplayer);

### Example using Promise

    function getFile() {
      return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
          if (req.status == 200) {
            resolve(req.response);
          } else {
            reject("File not Found");
          }
        };
        req.send();
      });
    }

    getFile()
    .then(function(response) {document.getElementById("demo").innerHTML = response;})
    .catch(function(error) {document.getElementById("demo").innerHTML = error;});

### JavaScript Promise Methods

&#10148; The Promise object has many associated methods that can be used to handle asynchronous results.

&#10148; Here is a list of the most important methods:

- `then()`
- `catch()`
- `finally()`
- `all()`
- `race()`

### Promise `then()`

&#10148; The `then()` method takes up to two arguments:

- `callback` functions for the success and failure cases of the Promise.

&#10148; The arguments passed to `then` are:

- `onFulfilled` _is the callback to execute when the Promise is fulfilled_
- `onRejected` _(Optional)_ _is the callback to execute when the Promise is rejected_

### Promise `catch()`

&#10148; The `catch()` method takes one argument, the `callback` function to be executed if the Promise is rejected.

&#10148; The `catch()` method returns a Promise and deals with rejected cases only.

&#10148; It behaves the same as calling `Promise.prototype.then(undefined, onRejected)` (in fact, calling `obj.catch(onRejected)` internally calls `obj.then(undefined, onRejected)`).

&#10148; This method is generally used for logging errors instead of handling them.

### Promise `finally()`

&#10149; The `finally()` method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed.

&#10149; This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

&#10149; This helps to avoid duplicating code in both the promise's `then()` and `catch()` handlers.

### Promise `all()`

&#10149; The `all()` method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

&#10149; This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises.

&#10149; It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

&#10149; This method can be useful for aggregating results of multiple promises together.

### Promise `race()`

&#10150; The `race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

&#10150; If the iterable passed is empty, the promise returned will be forever pending.


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders29/Promise/media.gif)
