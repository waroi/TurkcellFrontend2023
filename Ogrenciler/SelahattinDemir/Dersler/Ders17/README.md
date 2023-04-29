[Turn Back](../../)

<h1 align="center">Ders17 - JavaScript</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript Can Change HTML Content](#javascript-can-change-html-content)
  - [JavaScript Where To](#javascript-where-to)
  - [JavaScript Output](#javascript-output)
  - [JavaScript Statements](#javascript-statements)
  - [JavaScript Syntax](#javascript-syntax)
  - [Example Website](#example-website)

## JavaScript Can Change HTML Content

&#10147; One of many JavaScript HTML methods is `getElementById()`.

&#10147; The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaS

#### Example

    document.getElementById("demo").innerHTML = "Hello JavaScript";

<b>Note</b>&#10071; JavaScript accepts both double and single quotes:

    document.getElementById('demo').innerHTML = 'Hello JavaScript';

### JavaScript Can Change HTML Attribute Values

&#10148; In this example JavaScript changes the value of the `src` (source) attribute of an `<img>` tag:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h2>What Can JavaScript Do?</h2>

    <p>JavaScript can change HTML attribute values.</p>

    <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

    <img id="myImage" src="pic_bulboff.gif" style="width:100px">

    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

    </body>
    </html>

#### Result:

Turn on the light   ![alt text](https://www.w3schools.com/js/pic_bulbon.gif)
---![alt text](https://www.w3schools.com/js/pic_bulboff.gif) Turn off the light 

### JavaScript Can Change HTML Styles (CSS)

&#10148; Changing the style of an HTML element, is a variant of changing an HTML attribute:

#### Example

    document.getElementById("demo").style.fontSize = "35px";

### JavaScript Can Hide HTML Elements

&#10148; Hiding HTML elements can be done by changing the `display` style:

#### Example

    document.getElementById("demo").style.display = "none";

### JavaScript Can Show HTML Elements

&#10148; Showing hidden HTML elements can also be done by changing the `display` style:

#### Example

    document.getElementById("demo").style.display = "block";

### JavaScript Can Change HTML Classes

&#10148; Changing the class name of an HTML element is another way of accessing (and changing) the element:

#### Example

    document.getElementById("demo").className = "mystyle";

### Did You Know?

&#10149; JavaScript and Java are completely different languages, both in concept and design.

&#10149; JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

&#10149; ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

## JavaScript Where To

&#10149; In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

    <!DOCTYPE html>
    <html>
    <body>

    <h2>JavaScript in Body</h2>

    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "My First JavaScript";
    </script>

    </body>
    </html>

### JavaScript Functions and Events

&#10150; A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

&#10150; For example, a function can be called when an event occurs, like when the user clicks a button.

### JavaScript in `<head>` or `<body>`

&#10150; Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

#### JavaScript in `<head>`:

    <!DOCTYPE html>
    <html>
    <head>
    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>
    </head>
    <body>

    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    </body>
    </html>

#### JavaScript in `<body>`:

    <!DOCTYPE html>
    <html>
    <body>

    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    <script>
    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    </script>

    </body>
    </html>

<b>Note</b>&#10071; Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.

### External JavaScript

&#10151; Scripts can also be placed in external files:

#### External file: myScript.js

    function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }

#### HTML

    <!DOCTYPE html>
    <html>
    <body>

    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

    <script src="myScript.js"></script>

    </body>
    </html>

&#10151; External scripts are practical when the same code is used in many different web pages.

&#10151; JavaScript files have the file extension .js.

&#10151; To use an external script, put the name of the script file in the `src` (source) attribute of a `<script>` tag:

&#10151; You can place an external script reference in `<head>` or `<body>` as you like.

&#10151; The script will behave as if it was located exactly where the `<script>` tag is located

<b>Note</b>&#10071; External scripts cannot contain `<script>` tags.

### External JavaScript Advantages

- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads

### External JavaScript Disadvantages

- It increases the number of HTTP requests to the server (which can slow down page loading)
- The JavaScript file must be fully loaded before it can be used, which can delay website response time
- The JavaScript file cannot be cached, which can result in slower page loads (if you include the same script on several pages).

### External References

&#10152; An external script can be referenced in 3 different ways:

- With a full URL (a full web address)
- With a file path (like /js/)
- Without any path (filename only)

#### Full URL

    <script src="https://www.w3schools.com/js/myScript1.js"></script>

#### Relative Path

    <script src="/js/myScript2.js"></script>

#### Filename Only

    <script src="myScript3.js"></script>

## JavaScript Output

### JavaScript Display Possibilities

&#10153; JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML.`
- Writing into the HTML output using `document.write().`
- Writing into an alert box, using `window.alert().`
- Writing into the browser console, using `console.log().`

### Using innerHTML

&#10153; To access an HTML element, JavaScript can use the `document.getElementById(id)` method.

&#10153; The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = 5 + 6;
    </script>

    </body>
    </html>

<b>Note</b>&#10071; Changing the innerHTML property of an HTML element is a common way to display data in HTML.

### Using document.write()

&#10154; For testing purposes, it is convenient to use `document.write()`. It is usually used to "generate" content in the browser, for testing purposes.

&#10154; Using `document.write()` after an HTML document is loaded, will delete all existing HTML:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <p id="demo"></p>

    <script>
    document.write(5 + 6);
    </script>

    </body>
    </html>

<b>Note</b>&#10071; The document.write() method should only be used for testing.

### Using window.alert()

&#10155; You can use an alert box to display data:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
    window.alert(5 + 6);
    </script>

    </body>
    </html>

<b>Note</b>&#10071; You can skip the `window` keyword. In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the `window` keyword is optional:

### Using console.log()

&#10156; You can use `console.log()` to display data:

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
    console.log(5 + 6);
    </script>

    </body>
    </html>

### JavaScript Print

&#10157; JavaScript does not have any print object or print methods.
&#10157; You cannot access output devices from JavaScript.
&#10157; The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

#### Example

    <!DOCTYPE html>
    <html>
    <body>

    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <button onclick="window.print()">Print this page</button>

    </body>
    </html>

## JavaScript Statements

&#10158; JavaScript statements are composed of:

&#10158; Values, Operators, Expressions, Keywords, and Comments.

&#10158; This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

    document.getElementById("demo").innerHTML = "Hello Dolly.";

&#10158; Most JavaScript programs contain many JavaScript statements.

&#10158; The statements are executed, one by one, in the same order as they are written.

<b>Note</b>&#10071; JavaScript programs (and JavaScript statements) are often called JavaScript code.

### JavaScript Programs

&#10158; A computer program is a list of "instructions" to be "executed" by a computer.

&#10158; In a programming language, these programming instructions are called statements.

&#10158; A JavaScript program is a list of programming statements.

<b>Note</b>&#10071; In HTML, JavaScript programs are executed by the web browser.

### Semicolons Separate Statements

&#10158; Semicolons separate JavaScript statements.

&#10158; Multiple statements on one line are allowed:

    a = 5; b = 6; c = a + b;

<b>Note</b>&#10071; On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended.

### JavaScript White Space

&#10158; JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

    var person = "Hege";
    var person="Hege";

&#10158; A good practice is to put spaces around operators ( = + - \* / ):

      let x = y + z;

### JavaScript Line Length and Line Breaks

&#10158; For best readability, programmers often like to avoid code lines longer than 80 characters.

&#10158; If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

    document.getElementById("demo").innerHTML =
    "Hello Dolly!";

### JavaScript Code Blocks

&#10158; JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

&#10158; The purpose of code blocks is to define statements to be executed together.

&#10158; One place you will find statements grouped together in blocks, is in JavaScript functions:

    function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
    }

### JavaScript Keywords

&#10158; JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

&#10158; Our <a href="https://www.w3schools.com/js/js_reserved.asp">Reserved Words Reference</a> lists all JavaScript keywords.

&#10158; Here is a list of some of the keywords you will learn about in this tutorial:

<table>
<tbody><tr>
 <th>Keyword</th>
 <th>Description</th>
</tr>

<tr>
<td>var</td>
<td>Declares a variable</td>
</tr>
<tr>
<td>let</td>
<td>Declares a block variable</td>
</tr>
<tr>
<td>const</td>
<td>Declares a block constant</td>
</tr>
<tr>
<td>if</td>
<td>Marks a block of statements to be executed on a condition</td>
</tr>
<tr>
<td>switch</td>
<td>Marks a block of statements to be executed in different cases</td>
</tr>
<tr>
<td>for</td>
<td>Marks a block of statements to be executed in a loop</td>
</tr>
<tr>
<td>function</td>
<td>Declares a function</td>
</tr>
<tr>
<td>return</td>
<td>Exits a function</td>
</tr>
<tr>
<td>try</td>
<td>Implements error handling to a block of statements</td>
</tr>
</tbody></table>

<b>Note</b>&#10071; JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

## JavaScript Syntax

&#10159; JavaScript syntax is the set of rules, how JavaScript programs are constructed:

    // How to create variables:
    var x;
    let y;

    // How to use variables:
    x = 5;
    y = 6;
    let z = x + y;

### JavaScript Values

&#10159; The JavaScript syntax defines two types of values:

- Fixed values
- Variable values.

&#10159; Fixed values are called <b>Literals</b>.
&#10159; Variable values are called <b>Variables</b>.

### JavaScript Literals

&#10159; The two most important syntax rules for fixed values are:

1. <b>Numbers</b> are written with or without decimals:

   10.50
   1001

2. <b>Strings</b> are text, written within double or single quotes:

   "John Doe"
   'John Doe'

### JavaScript Variables

&#10159; In a programming language, <b>variables</b> are used to <b>store</b> data values.

&#10159; JavaScript uses the keywords var, let and const to <b>declare</b> variables.

&#10159; An <b>equal sign</b> is used to <b>assign values</b> to variables.

    let x;
    x = 6;

### JavaScript Operators

&#10159; JavaScript uses <b>arithmetic operators</b> (+, -, \*, /, %) to <b>compute</b> values (just like algebra).

    (5 + 6) * 10

&#10159; JavaScript uses an assignment operator ( = ) to assign values to variables:

    let x, y;
    x = 5;
    y = 6;

<table>
<tbody><tr>
 <th>Operator</th>
 <th>Description</th>
</tr>
<tr>
<td>+</td>
<td>Addition</td>
</tr>
<tr>
<td>-</td>
<td>Subtraction</td>
</tr>
<tr>
<td>*</td>
<td>Multiplication</td>
</tr>
<tr>
<td>/</td>
<td>Division</td>
</tr>
<tr>
<td>%</td>
<td>Modulus (division remainder)</td>
</tr>
<tr>
<td>++</td>
<td>Increment</td>
</tr>
<tr>
<td>--</td>
<td>Decrement</td>
</tr>
</tbody></table>

### JavaScript Expressions

&#10159; An expression is a combination of values, variables, and operators, which computes to a value.

    5 * 10

&#10159; Expressions can also contain variable values:

      x * 10

&#10159; The values can be of various types, such as numbers and strings.
For example, "John" + " " + "Doe", evaluates to "John Doe":

    "John" + " " + "Doe"

### JavaScript Keywords

&#10159; JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

&#10159; The let keyword tells the browser to create variables:

    let x, y;
    x = 5 + 6;
    y = x * 10;

### JavaScript Comments

&#10159; Comments can be used to explain JavaScript code, and to make it more readable.

&#10159; Comments can also be used to prevent execution, when testing alternative code.

&#10159; Single line comments start with //.

&#10159; Multi-line comments start with /_ and end with _/.

    // This is a single line comment

    /* This is a
    multi-line comment */

### JavaScript Identifiers / Names

&#10159; All JavaScript variables must be <b>identified</b> with <b>unique names</b>.

&#10159; These unique names are called <b>identifiers</b>.

&#10159; Identifiers are used to name variables and keywords, and functions.

&#10159; Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

&#10159; The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with ($) and (\_)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

&#10159; Subsequent characters may be letters, digits, underscores, or dollar signs.

<b>Note</b>&#10071; Numbers are not allowed as the first character. This way JavaScript can easily distinguish identifiers from numbers.

### JavaScript is Case Sensitive

&#10159; All JavaScript identifiers are <b>case sensitive</b>.

&#10159; The variables `lastName` and `lastname`, are two different variables.

    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";

<b>Note</b>&#10071; JavaScript does not interpret <b>LET</b> or <b>Let</b> as the keyword <b>let</b>.

### JavaScript and Camel Case

&#10159; Historically, programmers have used different ways of joining multiple words into one variable name:

- Hyphens:

  first-name, last-name, master-card, inter-city.

<b>Note</b>&#10071; Hyphens are not allowed in JavaScript. They are reserved for subtractions.

- Underscore:

  first_name, last_name, master_card, inter_city.

- Upper Camel Case (Pascal Case):

  FirstName, LastName, MasterCard, InterCity.

- Lower Camel Case:

  firstName, lastName, masterCard, interCity.

&#10159; JavaScript programmers tend to use camel case that starts with a lowercase letter.

### JavaScript Character Set

&#10159; JavaScript uses the <b>Unicode</b> character set.

&#10159; Unicode covers (almost) all the characters, punctuations, and symbols in the world.

For a closer look, study <a href="https://www.w3schools.com/charsets/ref_html_utf8.asp">Complete Unicode Reference</a>.

## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders17/photos/media.jpg)
