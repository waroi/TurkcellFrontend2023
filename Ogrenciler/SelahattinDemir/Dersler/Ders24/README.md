[Turn Back](../../)

<h1 align="center">Ders24 - JavaScript ES6+</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript ES6+

&#10147; ECMAScript (ES) is a scripting language specification standardized by ECMAScript International.

&#10147; It is used by applications to enable client-side scripting.

&#10147; Languages like JavaScript, JScript, and ActionScript are governed by this specification.

&#10147; ECMAScript is a standard. JavaScript is a language. ECMAScript is to JavaScript as POSIX is to Linux.

&#10147; ECMAScript 6 (ES6) is also known as ECMAScript 2015.

### New Features in ES6

- [The let keyword](#the-let-keyword)
- [The const keyword](#the-const-keyword)
- [Arrow Functions](#arrow-functions)
- [The Spread (...) Operator](#the-spread--operator)
- [For/of](#forof)
- [Map Objects](#map-objects)
- [Set Objects](#set-objects)
- [Classes](#classes)
- [Promises](#promises)
- [Symbol](#symbol)
- [Default Parameters](#default-parameters)
- [Function Rest Parameter](#function-rest-parameter)
- [String.includes()](#stringincludes)
- [String.startsWith()](#stringstartswith)
- [String.endsWith()](#stringendswith)
- [Array.from()](#arrayfrom)
- [Array keys()](#array-keys)
- [Array find()](#array-find)
- [Array findIndex()](#array-findindex)
- [New Math Methods](#new-math-methods)
- [New Number Properties](#new-number-properties)
- [New Number Methods](#new-number-methods)
- [New Global Methods](#new-global-methods)
- [Object entries](#object-entries)
- [JavaScript Modules](#javascript-modules)
- [Example Website](#example-website)

### Browser Support for ES6 (2015)

&#10147; Safari 10 and Edge 14 were the first browsers to fully support ES6:

<table>
  <tbody><tr style="height:60px">
    <th style="width:20%;"><img src="https://www.w3schools.com/images/compatible_chrome.png"></th>
    <th style="width:20%;"><img src="https://www.w3schools.com/images/compatible_edge.png" ></th>
    <th style="width:20%;"><img src="https://www.w3schools.com/images/compatible_firefox.png" ></th>
    <th style="width:20%;"><img src="https://www.w3schools.com/images/compatible_safari.png" ></th>
    <th style="width:19%;"><img src="https://www.w3schools.com/images/compatible_opera.png" ></th>                
  </tr>
  <tr>
    <td>Chrome 58</td>    
    <td>Edge 14</td>
    <td>Firefox 54</td>
    <td>Safari 10</td>
    <td>Opera 55</td>
  </tr>
  <tr>
    <td>Jan 2017</td>
    <td>Aug 2016</td>    
    <td>Mar 2017</td>
    <td>Jul 2016</td>
    <td>Aug 2018</td>
  </tr>
</tbody></table>

### The let keyword

&#10148; The `let` keyword was introduced in ES6 (2015).

&#10148; Variables defined with `let` cannot be Redeclared.

&#10148; Variables defined with `let` must be Declared before use.

&#10148; Variables defined with `let` have Block Scope.

&#10148; Variables declared inside a { } block cannot be accessed from outside the block:

#### Example

    var x = 10;
    // Here x is 10
    {
      let x = 2;
      // Here x is 2
    }
    // x can NOT be used here
    // Here x is 10

### The const keyword

&#10148; The `const` keyword was introduced in ES6 (2015).

&#10148; Variables defined with `const` cannot be Redeclared.

&#10148; Variables defined with `const` cannot be Reassigned.

&#10148; Variables defined with `const` have Block Scope.

&#10148; Variables declared inside a { } block cannot be accessed from outside the block:

#### Example

    const PI = 3.141592653589793;
    // PI = 3.14;      // This will give an error
    // PI = PI + 10;   // This will also give an error
    // PI = "PI";      // This will also give an error

### Arrow Functions

&#10148; Arrow functions allows a short syntax for writing function expressions.

&#10148; You don't need the `function` keyword, the `return` keyword, and the <b>curly brackets</b>.

&#10148; Arrow functions do not have their own `this`. They are not well suited for defining <b>object methods</b>.

#### Example

    // ES5
    var x = function(x, y) {
      return x * y;
    }
    // ES6
    const x = (x, y) => x * y;

&#10148; Arrow functions are not hoisted. They must be defined <b>before</b> they are used.

&#10148; Using `const` is safer than using `var`, because a function expression is always a constant value.

&#10148; You can only omit the `return` keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

#### Example

    const x = (x, y) => { return x * y };

### The Spread (...) Operator

&#10149; The `...` operator (three dots) is called the <b>spread operator</b>.

&#10149; The spread operator can be used to <b>expand</b> an array, or to <b>expand</b> arguments.

#### Example

    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4];
    console.log(newNumbers);

#### Result

    [1, 2, 3, 4]

### For/of

&#10149; The `for...of` statement creates a loop iterating over iterable objects (including `Array`, `Map`, `Set`, `String`, `TypedArray`, `arguments` object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

&#10149; The `for...of` statement is different from the `for...in` statement. The `for...in` statement iterates over the enumerable property names of an object, invoking the iteration steps for each distinct property name. The `for...of` statement iterates over values that the iterable object defines to be iterated over.

#### Example

    let cars = ["BMW", "Volvo", "Mini"];
    let x;

    for (x of cars) {
      document.write(x + "<br >");
    }

#### Result

    BMW
    Volvo
    Mini

#### Looping over a String

    let language = "JavaScript";
    let x;

    for (x of language) {
      document.write(x + "<br >");
    }

#### Result

    J
    a
    v
    a
    S
    c
    r
    i
    p
    t

### Map Objects

&#10149; The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

&#10149; A `Map` object iterates its elements in insertion order — a `for...of` loop returns an array of `[key, value]` for each iteration.

&#10149; A `Map` object contains `[[Entries]]` instead of `[[PrimitiveValue]]` in ES5.

#### Example

    let myMap = new Map();

    let keyString = "a string",
        keyObj = {},
        keyFunc = function() {};

    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, "value associated with keyObj");
    myMap.set(keyFunc, "value associated with keyFunc");

    myMap.size; // 3

    // getting the values
    myMap.get(keyString);    // "value associated with 'a string'"
    myMap.get(keyObj);       // "value associated with keyObj"
    myMap.get(keyFunc);      // "value associated with keyFunc"

    myMap.get("a string");   // "value associated with 'a string'"
                             // because keyString === 'a string'
    myMap.get({});           // undefined, because keyObj !== {}
    myMap.get(function() {}) // undefined, because keyFunc !== function () {}

### Set Objects

&#10150; The `Set` object lets you store unique values of any type, whether primitive values or object references.

&#10150; A value in the `Set` may only occur once; it is unique in the `Set`'s collection.

&#10150; A `Set` is a special type collection – "set of values" (without keys), where each value may occur only once.

&#10150; Its main methods are:

- `new Set(iterable)` – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- `set.add(value)` – adds a value, returns the set itself.
- `set.delete(value)` – removes the value, returns true if value existed at the moment of the call, otherwise false.
- `set.has(value)` – returns true if the value exists in the set, otherwise false.
- `set.clear()` – removes everything from the set.
- `set.size` – is the elements count.

#### Example

    let mySet = new Set();

    mySet.add(1); // Set [ 1 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add("some text"); // Set [ 1, 5, 'some text' ]
    let o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

    mySet.has(1); // true
    mySet.has(3); // false, since 3 has not been added to the set
    mySet.has(5); // true
    mySet.has(Math.sqrt(25)); // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true

    mySet.size; // 5

    mySet.delete(5); // removes 5 from the set
    mySet.has(5); // false, 5 has been removed

    mySet.size; // 4, we just removed one value

    console.log(mySet);
    // logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
    // logs Set(4) { 1, "some text", {…}, {…} } in Chrome

    for (let item of mySet) console.log(item);
    // logs 1
    // logs "some text"
    // logs { a: 1, b: 2 }
    // logs { a: 1, b: 2 }

    for (let item of mySet.keys()) console.log(item);
    // logs 1
    // logs "some text"
    // logs { a: 1, b: 2 }
    // logs { a: 1, b: 2 }

    for (let item of mySet.values()) console.log(item);
    // logs 1
    // logs "some text"
    // logs { a: 1, b: 2 }
    // logs { a: 1, b: 2 }

    for (let [key, value] of mySet.entries()) console.log(key);
    // logs

    // logs 1
    // logs "some text"
    // logs { a: 1, b: 2 }
    // logs { a: 1, b: 2 }

    // convert Set object to an Array object, with Array.from
    let myArr = Array.from(mySet); // [1, "some text", {…}, {…}]

    // the following will also work if run in an HTML document
    mySet.add(document.body);
    mySet.has(document.querySelector("body")); // true

    // converting between Set and Array
    mySet2 = new Set([1, 2, 3, 4]);
    mySet2.size; // 4
    [...mySet2]; // [1, 2, 3, 4]

    // intersect can be simulated via
    let intersection = new Set([...set1].filter(x => set2.has(x)));

    // difference can be simulated via
    let difference = new Set([...set1].filter(x => !set2.has(x)));

    // Iterate set entries with forEach()
    mySet.forEach(function(value) {
      console.log(value);
    });

    // 1
    // 2
    // 3
    // 4

### Classes

&#10150; JavaScript Classes are templates for JavaScript Objects.

&#10150; Use the keyword class to create a class.

&#10150; Always add a method named constructor():

    class MyClass {
      constructor() { ... }
    }

#### Example

    class Car {
      constructor(name, year) {
        this.name = name;
        this.year = year;
      }
    }

The example above creates a class named "Car". The class has two initial properties: "name" and "year".

<b>Note</b>&#10071; A JavaScript class is <b>not </b>an object. It is a <b>template</b> for JavaScript objects.

&#10150; JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

&#10150; Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

#### Example

    class Polygon {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    }

    class Square extends Polygon {
      constructor(sideLength) {
        super(sideLength, sideLength);
      }
      get area() {
        return this.height * this.width;
      }
      set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
      }
    }

    var square = new Square(2);

#### Result

    square.area;
    // 4

### Promises

&#10150; A Promise is an object representing the eventual completion or failure of an asynchronous operation.

&#10150; A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

#### Example

    let myFirstPromise = new Promise((resolve, reject) => {
      // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
      // In this example, we use setTimeout(...) to simulate async code.
      // In reality, you will probably be using something like XHR or an HTML5 API.
      setTimeout(function(){
        resolve("Success!"); // Yay! Everything went well!
      }, 250);
    });

    myFirstPromise.then((successMessage) => {
      // successMessage is whatever we passed in the resolve(...) function above.
      // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      console.log("Yay! " + successMessage);
    });

#### Result

    Yay! Success!

### Symbol

&#10151; The `Symbol()` function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "new Symbol()".

&#10151; Every symbol value returned from `Symbol()` is unique. A symbol value may be used as an identifier for object properties; this is the data type's only purpose.

    Symbol("id") == Symbol("id"); // false

&#10151; Some well-known symbols are `Symbol.iterator`, `Symbol.asyncIterator`, `Symbol.toStringTag`, and `Symbol.for`.

#### Example

    let sym1 = Symbol();
    let sym2 = Symbol("foo");
    let sym3 = Symbol("foo");

    sym2 === sym3; // false, symbols are unique

    let sym = Symbol();

    let obj = {
      [sym]: "value"
    };

    console.log(obj[sym]); // "value"

### Default Parameters

&#10151; Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

&#10151; In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

#### Example

    function multiply(a, b = 1) {
      return a * b;
    }

    multiply(5, 2); // 10
    multiply(5, 1); // 5
    multiply(5);    // 5

### Function Rest Parameter

&#10151; The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

&#10151; If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.

&#10151; Only the last parameter can be a "rest parameter".

#### Example

    function myFun(a, b, ...manyMoreArgs) {
      console.log("a", a);
      console.log("b", b);
      console.log("manyMoreArgs", manyMoreArgs);
    }

    myFun("one", "two", "three", "four", "five", "six");

#### Result

    a, one
    b, two
    manyMoreArgs, ["three", "four", "five", "six"]

### String.includes()

&#10152; The `includes()` method determines whether one string may be found within another string, returning `true` or `false` as appropriate.

&#10152; The `includes()` method is case sensitive.

#### Example

    const str = "To be, or not to be, that is the question.";

    console.log(str.includes("To be"));       // true
    console.log(str.includes("question"));    // true
    console.log(str.includes("nonexistent")); // false
    console.log(str.includes("To be", 1));    // false
    console.log(str.includes("TO BE"));       // false

### String.startsWith()

&#10152; The `startsWith()` method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.

&#10152; The `startsWith()` method is case sensitive.

#### Example

    const str1 = "Saturday night plans";

    console.log(str1.startsWith("Sat")); // true
    console.log(str1.startsWith("Sat", 3)); // false

### String.endsWith()

&#10152; The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.

&#10152; The `endsWith()` method is case sensitive.

#### Example

    const str1 = "Saturday night plans";

    console.log(str1.endsWith("plans")); // true
    console.log(str1.endsWith("night", 6)); // true
    console.log(str1.endsWith("Sat")); // false

### Array.from()

&#10153; The `Array.from()` static method creates a new, shallow-copied `Array` instance from an array-like or iterable object.

&#10153; The `Array.from()` method has an optional parameter `mapFn`, which allows you to execute a `map` function on each element of the array (or subclass object) that is being created. More clearly, `Array.from(obj, mapFn, thisArg)` has the same result as `Array.from(obj).map(mapFn, thisArg)`, except that it does not create an intermediate array.

#### Example

    console.log(Array.from('foo'));
    // expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], x => x + x));
    // expected output: Array [2, 4, 6]

### Array keys()

&#10153; The `keys()` method returns a new `Array Iterator` object that contains the keys for each index in the array.

&#10153; The `keys()` method is an inbuilt function in JavaScript which is used to return a new array iterator object that contains the keys for each index in the array i.e the index values of the array.

#### Example

    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();

    for (const key of iterator) {
      console.log(key);
    }

#### Result

    0
    1
    2

### Array find()

&#10153; The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function.

&#10153; The `find()` method executes the function once for each element present in the array:

- If it finds an array element where the function returns a true value, `find()` returns the value of that array element (and does not check the remaining values)
- Otherwise it returns undefined
- The `find()` method does not execute the function for empty arrays.
- The `find()` method does not change the original array.

&#10153; Note that the function takes 3 arguments:

- The item value
- The item index
- The array itself

#### Example

    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    console.log(found);

#### Result

    12

### Array findIndex()

&#10153; The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

&#10153; The `findIndex()` method executes the function once for each element present in the array:

- If it finds an array element where the function returns a true value, `findIndex()` returns the index of that array element (and does not check the remaining values)
- Otherwise it returns -1
- `findIndex()` does not execute the function for empty arrays.
- `findIndex()` does not change the original array.

&#10153; Note that the function takes 3 arguments:

- The item value
- The item index
- The array itself

#### Example

    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3

### New Math Methods

&#10154; The `Math` object is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.

&#10154; The `Math` object provides several constants and methods for mathematical functions and constants.

&#10154; ES6 added the following methods to the Math object:

- `Math.trunc()`
- `Math.sign()`
- `Math.cbrt()`
- `Math.log2()`
- `Math.log10()`

#### Example

    Math.PI; // 3.141592653589793
    Math.SQRT2; // 1.4142135623730951

    Math.abs(-1); // 1
    Math.ceil(4.5); // 5
    Math.floor(4.5); // 4
    Math.max(1, 2, 3); // 3
    Math.min(1, 2, 3); // 1
    Math.pow(2, 3); // 8
    Math.random(); // 0.4011148700959775
    Math.round(4.5); // 5
    Math.sqrt(4); // 2
    Math.trunc(4.9); // 4
    Math.sign(-4); // -1
    Math.cbrt(8); // 2
    Math.log2(8); // 3
    Math.log10(100); // 2

#### The Math.trunc() Method

&#10154; The `Math.trunc()` function returns the integer part of a number by removing any fractional digits.

#### Example

    Math.trunc(13.37); // 13
    Math.trunc(42.84); // 42
    Math.trunc(0.123); // 0
    Math.trunc(-0.123); // -0
    Math.trunc("-1.123"); // -1
    Math.trunc(NaN); // NaN
    Math.trunc("foo"); // NaN
    Math.trunc(); // NaN

#### The Math.sign() Method

&#10154; The `Math.sign()` function returns the sign of a number, indicating whether the number is positive, negative or zero.

#### Example

    Math.sign(3);     //  1
    Math.sign(-3);    // -1
    Math.sign('-3');  // -1
    Math.sign(0);     //  0
    Math.sign(-0);    // -0
    Math.sign(NaN);   // NaN
    Math.sign('foo'); // NaN
    Math.sign();      // NaN

#### The Math.cbrt() Method

&#10154; The `Math.cbrt()` function returns the cube root of a number, that is

#### Example

    Math.cbrt(-1); // -1
    Math.cbrt(0); // 0
    Math.cbrt(1); // 1
    Math.cbrt(2); // 1.2599210498948734
    Math.cbrt(3); // 1.4422495703074083
    Math.cbrt(4); // 1.5874010519681994
    Math.cbrt(5); // 1.7099759466766968
    Math.cbrt(-8); // -2
    Math.cbrt(-1000); // -10

#### The Math.log2() Method

&#10154; The `Math.log2()` function returns the base 2 logarithm of a number, that is

#### Example

    Math.log2(3); // 1.584962500721156
    Math.log2(2); // 1
    Math.log2(1); // 0
    Math.log2(0); // -Infinity
    Math.log2(-2); // NaN
    Math.log2(1024); // 10

#### The Math.log10() Method

&#10154; The `Math.log10()` function returns the base 10 logarithm of a number, that is

#### Example

    Math.log10(2); // 0.3010299956639812
    Math.log10(1); // 0
    Math.log10(0); // -Infinity
    Math.log10(-2); // NaN
    Math.log10(1000); // 3

### New Number Properties

&#10155; The `Number` JavaScript object is a wrapper object allowing you to work with numerical values. A `Number` object is created using the `Number()` constructor.

&#10155; ES6 added the following properties to the Number object:

- `Number.EPSILON`
- `Number.MAX_SAFE_INTEGER`
- `Number.MIN_SAFE_INTEGER`

#### Example

    Number.EPSILON; // 2.220446049250313e-16
    Number.MAX_SAFE_INTEGER; // 9007199254740991
    Number.MIN_SAFE_INTEGER; // -9007199254740991

### New Number Methods

&#10155; ES6 added 2 new methods to the Number object:

- `Number.isInteger()`
- `Number.isSafeInteger()`

#### The Number.isInteger() Method

&#10155; The `Number.isInteger()` method determines whether the passed value is an integer.

#### Example

    Number.isInteger(0);         // true
    Number.isInteger(1);         // true
    Number.isInteger(-100000);   // true
    Number.isInteger(99999999999999999999999); // true

    Number.isInteger(0.1);       // false
    Number.isInteger(Math.PI);   // false

    Number.isInteger(NaN);       // false
    Number.isInteger(Infinity);  // false
    Number.isInteger(-Infinity); // false
    Number.isInteger('10');      // false
    Number.isInteger(true);      // false
    Number.isInteger(false);     // false
    Number.isInteger([1]);       // false

#### The Number.isSafeInteger() Method

&#10155; The `Number.isSafeInteger()` method determines whether the provided value is a number that is a safe integer.

#### Example

    Number.isSafeInteger(3);                    // true
    Number.isSafeInteger(Math.pow(2, 53));      // false
    Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
    Number.isSafeInteger(NaN);                  // false
    Number.isSafeInteger(Infinity);             // false
    Number.isSafeInteger('3');                  // false
    Number.isSafeInteger(3.1);                  // false
    Number.isSafeInteger(3.0);                  // true

<b>Note</b>&#10071; Safe integers are all integers from -(253 - 1) to +(253 - 1). This is safe: 9007199254740991. This is not safe: 9007199254740992.

### New Global Methods

&#10156; ES6 added 2 new methods to the Global object:

- `isFinite()`
- `isNaN()`

#### The isFinite() Method

&#10156; The `isFinite()` function determines whether a number is a finite, legal number.

#### Example

    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(0);         // true
    isFinite(2e64);      // true
    isFinite(null);      // true

#### The isNaN() Method

&#10156; The `isNaN()` function determines whether a value is `NaN` or not. 
<b>Note</b>&#10071; Coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

#### Example

    isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true

    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false

    // strings
    isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
    isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
    isNaN("");        // false: the empty string is converted to 0 which is not NaN
    isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN
    isNaN("blabla")   // true: "blabla" is converted to a number which is NaN

    // This is a false positive and the reason why isNaN is not entirely reliable
    isNaN("blabla")   // true: "blabla" is converted to a number. 
                      // Parsing this as a number fails and returns NaN

### Object entries

&#10157; The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a `for...in` loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

&#10157; The order of the array returned by `Object.entries()` does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

&#10157; If you want the same functionality as `Object.entries()` on a non-enumerable object property, see `Object.getOwnPropertyNames()`.

#### Example

    const object1 = {
      a: 'somestring',
      b: 42
    };

    for (const [key, value] of Object.entries(object1)) {
      console.log(`${key}: ${value}`);
    }

    // expected output:
    // "a: somestring"
    // "b: 42"
    // order is not guaranteed

### Object.values()

&#10157; The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as that provided by a `for...in` loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well).

&#10157; If you want the same functionality as `Object.values()` on a non-enumerable object property, see `Object.getOwnPropertyNames()`.

#### Example

    const object1 = {
      a: 'somestring',
      b: 42,
      c: false
    };

    console.log(Object.values(object1));
    // expected output: Array ["somestring", 42, false]

### Object.getOwnPropertyDescriptors()

&#10157; The `Object.getOwnPropertyDescriptors()` method returns all own property descriptors of a given object.

&#10157; The `Object.getOwnPropertyDescriptors()` method is an inbuilt function in JavaScript which is used to get all own property descriptors of a given object.

#### Example

    const object1 = {
      property1: 42
    };

    const descriptors1 = Object.getOwnPropertyDescriptors(object1);

    console.log(descriptors1.property1.writable);
    // expected output: true

    console.log(descriptors1.property1.value);
    // expected output: 42

### JavaScript Modules

&#10158; JavaScript modules are used to break up large programs into smaller files.

&#10158; Modules provide better maintainability and code reuse for large or complex code bases.

&#10158; Modules are executed in strict mode automatically.

&#10158; Modules have their own, local top-level scope and interchange functionality via `export` and `import`.

&#10158; The `export` statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the `import` statement.

&#10158; The `import` statement is used to import bindings which are exported by another module.

#### Example

    //------ lib.js ------
    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }

    //------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders24/photos/media.gif)
