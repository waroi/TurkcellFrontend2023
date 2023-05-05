[Turn Back](../../)

<h1 align="center">Ders23 - JavaScript LocalStorage</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript LocalStorage

&#10147; The `localStorage` and `sessionStorage` properties allow to save key/value pairs in a web browser.

&#10147; The `localStorage` object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

### Example

    Set and retrieve localStorage name/value pair:

    localStorage.setItem("lastname", "Smith");
    localStorage.getItem("lastname");

&#10147; The `localStorage` property is read-only.

&#10147; The difference between `localStorage` and `sessionStorage` is that `sessionStorage` only maintains a storage area while the browser is open (including when the page reloads or restores), but `localStorage` continues to exist even when the browser is closed and reopened.

### Syntax

    window.localStorage

or just:

    localStorage

#### Save Data to Local Storage

    localStorage.setItem(key, value);
    // Store
    localStorage.setItem("lastname", "Smith");

#### Read Data from Local Storage

    let lastname = localStorage.getItem(key);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");

#### Remove Data from Local Storage

    localStorage.removeItem(key);
    // Remove
    localStorage.removeItem("lastname");

#### Remove All Data from Local Storage

    localStorage.clear();
    // Remove all
    localStorage.clear();

### Parameters

<table>
<tbody><tr></tr>
 <tr>
   <td style="width:120px">Parameter</td>
   <td>Description</td>
 </tr>
<tr>
  <td>key</td><td>Required.<br>The name of a key.</td>
</tr>
<tr>
  <td>value</td><td>Required.<br>The value of the key.</td>
</tr>
</tbody></table>

### Return Value

<table>
<tbody><tr></tr>
<tr>
 <td style="width:120px">Type</td>
 <td>Description</td>
</tr>
<tr>
  <td>An object</td><td>A localStorage object.</td>
</tr>
</tbody></table>

### Example

    <!DOCTYPE html>
    <html>
    <body>

    <p>Click the button to create a Storage Object.</p>

    <button onclick="myFunction()">Try it</button>

    <p id="demo"></p>

    <script>
    function myFunction() {
      localStorage.setItem("lastname", "Smith");
      document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
    }
    </script>

    </body>
    </html>


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders23/photos/media.gif)
