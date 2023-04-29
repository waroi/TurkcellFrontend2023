[Turn Back](../../)

<h1 align="center">Ders18 - JavaScript Variables</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript Variables](#javascript-variables)
  - [JavaScript Data Types](#javascript-data-types)
  - [JavaScript Arithmetic](#javascript-arithmetic)
  - [JavaScript Functions](#javascript-functions)
  - [Example Website](#example-website)

## JavaScript Variables

&#10147; 4 Ways to Declare a JavaScript Variable:

- Using var
- Using let
- Using const
- Using nothing

### What are Variables?

&#10147; Variables are containers for storing data (storing data values).

&#10147; In this example, `x`, `y`, and `z`, are variables, declared with the `var` keyword:

    var x = 5;
    var y = 6;
    var z = x + y;

&#10147; In this example, `x`, `y`, and `z`, are variables, declared with the `let` keyword:

    let x = 5;
    let y = 6;
    let z = x + y;

&#10147; In this example, x, y, and z, are undeclared variables:

    x = 5;
    y = 6;
    z = x + y;

### When to Use JavaScript var?

&#10147; Always declare JavaScript variables with `var`, `let`, or `const`.
&#10147; The `var` keyword is used in all JavaScript code from 1995 to 2015.
&#10147; The `let` and `const` keywords were added to JavaScript in 2015.
&#10147; If you want your code to run in older browsers, you must use `var`.

### When to Use JavaScript const?

&#10148; The `const` keyword was introduced in ES6 (2015).
&#10148; Variables defined with `const` cannot be reassigned.
&#10148; `const` cannot update variable declarations or create new ones.
&#10148; `const` can be declared with uppercase or lowercase letters.

    const PI = 3.141592653589793;
    const PI = 3.14;

&#10148; If you think the value of the variable can change, use let.

    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;

&#10148; The two variables `price1` and `price2` are declared with the const keyword.

&#10148; These are constant values and cannot be changed.

&#10148; The variable `total` is declared with the `let` keyword.

&#10148; This is a value that can be changed.

<b>Note</b>&#10071; Variables are containers for storing values.

### When to Use JavaScript let?

&#10148; The `let` keyword was introduced in ES6 (2015).
&#10148; Variables defined with `let` cannot be Redeclared.
&#10148; Variables defined with `let` must be Declared before use.
&#10148; Variables defined with `let` have Block Scope.

    let x = 10;
    // Here x is 10
    {
    let x = 2;
    // Here x is 2
    }
    // Here x is 10

&#10148; Redeclaring a variable using the `var` keyword can impose problems.

&#10148; Redeclaring a variable inside a block will also redeclare the variable outside the block:

    var x = 10;
    // Here x is 10
    {
    var x = 2;
    // Here x is 2
    }
    // Here x is 2

&#10148; Redeclaring a variable using the `let` keyword can solve this problem.

&#10148; Redeclaring a variable inside a block will not redeclare the variable outside the block:

    let x = 10;
    // Here x is 10
    {
    let x = 2;
    // Here x is 2
    }
    // Here x is 10

### Block Scope

&#10149; Before ES6 (2015), JavaScript had <b>Global Scope</b> and <b>Function Scope</b>.

&#10149; ES6 introduced two important new JavaScript keywords: let and const.

&#10149; These two keywords provide <b>Block Scope</b> in JavaScript.

&#10149; Variables declared with the `var` keyword can not have block scope.

&#10149; Variables declared inside a block {} can be accessed from outside the block.

&#10149; Variables declared with the `let` keyword can have block scope.

&#10149; Variables declared inside a block {} cannot be accessed from outside the block:

    // Code here can NOT use carName

    {
    let carName = "Volvo";
    // Code here CAN use carName
    }

    // Code here can NOT use carName

## JavaScript Data Types

&#10149; JavaScript variables can hold numbers like 100 and text values like "John Doe".
&#10149; In programming, text values are called text strings.
&#10149; JavaScript can handle many types of data, but for now, just think of numbers and strings.
&#10149; Strings are written inside double or single quotes. Numbers are written without quotes.
&#10149; If you put a number in quotes, it will be treated as a text string.

    let length = 16;                                   // Number
    let lastName = "Johnson";                          // String
    const obj = {firstName:"John", lastName:"Doe"};    // Object
    const arr = ["Saab", "Volvo", "BMW"];              // Array

### Declaring a JavaScript Variable

&#10149; Creating a variable in JavaScript is called "declaring" a variable.

&#10149; You declare a JavaScript variable with the `var` or the `let` keyword:

    var carName;

or

    let carName;

&#10149; After the declaration, the variable has no value (technically it has the value of undefined):

&#10149; To assign a value to the variable, use the equal sign:

    carName = "Volvo";

&#10149; You can also <b>assign</b> a value to the variable when you declare it:

    let carName = "Volvo";

<b>Note</b>&#10071; It's a good programming practice to declare all variables at the beginning of a script.

### One Statement, Many Variables

&#10149; You can declare many variables in one statement.

&#10149; Start the statement with `var` or `let` and separate the variables by <b>comma</b>:

    let person = "John Doe", carName = "Volvo", price = 200;

### Value = undefined

&#10149; In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

&#10149; Variables declared without a value, automatically get the value `undefined`. Empty values can be legal in JavaScript.

&#10149; An empty value has nothing to do with `undefined`. An empty string has both a legal value and a type.

    let carName = "";
    // The value is "", the typeof is "string"

### Re-Declaring JavaScript Variables`

&#10150; If you re-declare a JavaScript variable declared with `var`, it will not lose its value.

&#10150; The variable `carName` will still have the value "Volvo" after the execution of these statements:

    var carName = "Volvo";
    var carName;

<b>Note</b>&#10071; You cannot re-declare a variable declared with let or const.
This will not work:

    let carName = "Volvo";
    let carName;

## JavaScript Arithmetic

&#10150; JavaScript arithmetic operators are addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%).

&#10150; Arithmetic operators perform arithmetic on numbers (literals or variables).

&#10150; The `+` operator can also be used to add (concatenate) strings.

#### Example

    let x = 5 + 2 + 3;
    let y = "5" + 2 + 3;
    let z = "Hello" + 5;

#### Result:

    x = 10
    y = 523
    z = Hello5

<b>Note</b>&#10071; If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

## JavaScript Functions

&#10150; A JavaScript function is a block of code designed to perform a particular task.

&#10150; A JavaScript function is executed when "something" invokes it (calls it).

    // Function to compute the product of p1 and p2
    function myFunction(p1, p2) {
    return p1 * p2;
    }

### JavaScript Function Syntax

&#10151; A JavaScript function is defined with the `function` keyword, followed by a <b>name</b>, followed by parentheses ().

&#10151; Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

&#10151; The parentheses may include parameter names separated by commas:

    (parameter1, parameter2, ...)

&#10151; The code to be executed, by the function, is placed inside curly brackets: {}

    function name(parameter1, parameter2, parameter3) {
    // code to be executed
    }

&#10151; Function <b>parameters</b> are listed inside the parentheses () in the function definition.

&#10151; Function <b>arguments</b> are the <b>values</b> received by the function when it is invoked.

&#10151; Inside the function, the arguments (the parameters) behave as local variables.

### Function Invocation

&#10152; The code inside the function will execute when "something" <b>invokes</b> (calls) the function:

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

  myFunction();

### Function Return

&#10152; When JavaScript reaches a `return` statement, the function will stop executing.

&#10152; If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

&#10152; Functions often compute a `return value`. The return value is "returned" back to the "caller":

#### Example

    Calculate the product of two numbers, and return the result:

    let x = myFunction(4, 3);   // Function is called, return value will end up in x

    function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
    }

#### Result:

    x = 12

### Why Functions?

&#10153; You can reuse code: Define the code once, and use it many times.

&#10153; You can use the same code many times with different arguments, to produce different results.

#### Example

    Convert Fahrenheit to Celsius:

    let x = toCelsius(77);
    let text = "The temperature is " + x + " Celsius";

    function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }

#### Result:

    The temperature is 25 Celsius

### The () Operator Invokes the Function

&#10154; Using the example above, `toCelsius` refers to the function object, and `toCelsius()` refers to the function result.

&#10154; Accessing a function without () will return the function object instead of the function result.

#### Example

    Do NOT execute the function, only return the function definition:

    function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }

    let x = toCelsius;      // do not use () after the function name

    let text = x(77);       // execute function

#### Result:

    25

### Functions Used as Variable Values

&#10155; Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

#### Example

    Instead of using a variable to store the return value of a function:

    let x = toCelsius(77);
    let text = "The temperature is " + x + " Celsius";

    You can use the function directly, as a variable value:

    let text = "The temperature is " + toCelsius(77) + " Celsius";

### Local Variables

&#10156; Variables declared within a JavaScript function, become LOCAL to the function.

&#10156; Local variables can only be accessed from within the function.

#### Example

    Code here can NOT use carName

    function myFunction() {
    let carName = "Volvo";

    // code here CAN use carName

    }

    Code here can NOT use carName

&#10156; Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

&#10156; Local variables are created when a function starts, and deleted when the function is completed.

### Function Parameters

&#10157; Function parameters are the names listed in the function's definition.

&#10157; Function arguments are the real values passed to (and received by) the function.

&#10157; Parameters are initialized to the values of the arguments supplied.

#### Example

    Function with two parameters, a and b:

    function myFunction(a, b) {
    return a * b;
    }

    myFunction(10, 2);   // Will return 20

### JavaScript Function String()

&#10158; The `String()` method returns the function as a string.

#### Example

    function myFunction(a, b) {
    return a * b;
    }

    let txt = myFunction.String();

#### Result:

    function myFunction(a, b) {
      return a * b;
    }

### JavaScript Function Number()

&#10159; The `Number()` method returns the function as a number.

#### Example

    function myFunction(a, b) {
    return a * b;
    }

    let txt = myFunction.Number();

#### Result:

    NaN


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders18/photos/media.gif)
