[Turn Back](../../)

<h1 align="center">Ders21 - JavaScript Functions</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript Functions](#javascript-functions)
  - [Function Parameters](#function-parameters)
  - [Example Website](#example-website)

## JavaScript Functions

- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

#### Example

    // Function to compute the product of p1 and p2
    function myFunction(p1, p2) {
      return p1 * p2;
    }

### JavaScript Function Syntax

&#10147; A JavaScript function is defined with the `function` keyword, followed by a <b></b>name, followed by <b>parentheses ()</b>.

&#10147; Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

&#10147; The parentheses may include parameter names separated by commas:
<b>(parameter1, parameter2, ...)</b>

&#10147; The code to be executed, by the function, is placed inside curly brackets: <b>{}</b>

    function name(parameter1, parameter2, parameter3) {
      // code to be executed
    }

&#10147; Function <b>parameters</b> are listed inside the parentheses () in the function definition.

&#10147; Function <b>arguments</b> are the <b>values</b> received by the function when it is invoked.

&#10147; Inside the function, the arguments (the parameters) behave as local variables.

### Function Invocation

&#10147; The code inside the function will execute when "something" <b>invokes</b> (calls) the function:

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

### Function Return

&#10148; When JavaScript reaches a <b>return</b> statement, the function will stop executing.

&#10148; If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

&#10148; Functions often compute a <b>return value</b>. The return value is "returned" back to the "caller":

#### Example

    Calculate the product of two numbers, and return the result:
      let x = myFunction(4, 3);   // Function is called, return value will end up in x

      function myFunction(a, b) {
        return a * b;             // Function returns the product of a and b
      }
    The result in x will be:

      12

### Why Functions?

&#10148; You can reuse code: Define the code once, and use it many times.

&#10148; You can use the same code many times with different arguments, to produce different results.

#### Example

    Convert Fahrenheit to Celsius:

      function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
      }
      document.getElementById("demo").innerHTML = toCelsius(77);

### The () Operator Invokes the Function

&#10148; Using the example above, `toCelsius` refers to the function object, and `toCelsius()` refers to the function result.

&#10148; Accessing a function without () will return the function object instead of the function result.

#### Example

    Do NOT execute the function, only return the function definition:

      function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
      }
      document.getElementById("demo").innerHTML = toCelsius;

### Functions Used as Variable Values

&#10149; Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

#### Example

    Instead of using a variable to store the return value of a function:

      let x = toCelsius(77);
      let text = "The temperature is " + x + " Celsius";

    You can use the function directly, as a variable value:

      let text = "The temperature is " + toCelsius(77) + " Celsius";

### Local Variables

&#10149; Variables declared within a JavaScript function, become <b>LOCAL</b> to the function.

&#10149; Local variables can only be accessed from within the function.

#### Example

    Code here can NOT use carName

      function myFunction() {
        let carName = "Volvo";
        // code here CAN use carName
      }

    Code here can NOT use carName

&#10149; Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

&#10149; Local variables are created when a function starts, and deleted when the function is completed.

## Function Parameters

&#10150; Function parameters are the names listed in the function's definition.

&#10150; Function arguments are the real values passed to (and received by) the function.

&#10150; Information can be passed to functions as a parameter. Parameters are specified after the function name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.

&#10150; The following example has a function with one parameter (fname). When the function is called, we pass along a first name, which is used inside the function to output the full name:

#### Example

    function myFunction(fname) {
      console.log(fname + " Refsnes");
    }

    myFunction("Liam");
    myFunction("Jenny");
    myFunction("Anja");

    The result of the code above is:

      Liam Refsnes
      Jenny Refsnes
      Anja Refsnes

&#10150; The terms <b>parameter</b> and <b>argument</b> can be used for the same thing: information that are passed into a function.

&#10150; From the example above: <b>fname</b> is a parameter. <b>Liam</b>, <b>Jenny</b>, and <b>Anja</b> are arguments.

### Arrow Functions

&#10151; ES6 also introduced <b>arrow functions</b>.

&#10151; Arrow functions allow us to write shorter function syntax

&#10151; You don't need the `function` keyword, the `return` keyword, and the <b>curly brackets</b>.

#### Example

    // ES5
    const x = function(x, y) {
      return x * y;
    }

    // ES6
    const x = (x, y) => x * y;

&#10151; Arrow functions do not have their own `this`. They are not well suited for defining <b>object methods</b>.

&#10151; Arrow functions are not hoisted. They must be defined <b>before</b> they are used.

&#10151; Using `const` is safer than using `var`, because a function expression is always constant value.

&#10151; You can only omit the `return` keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

    const x = (x, y) => { return x * y };

<b>Note</b>&#10071; Arrow functions are not supported in IE11 or earlier.

## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders21/photos/media.gif)
