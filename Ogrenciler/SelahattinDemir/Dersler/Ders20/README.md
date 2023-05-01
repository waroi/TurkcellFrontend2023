[Turn Back](../../)

<h1 align="center">Ders20 - JavaScript Arrays and Objects</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript Arrays](#javascript-arrays)
  - [Array Properties and Methods](#array-properties-and-methods)
  - [Example Website](#example-website)

## JavaScript Arrays

&#10147; An array is a special variable, which can hold more than one value:

    let cars = ["Saab", "Volvo", "BMW"];

### Why Use Arrays?

&#10147; If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

    let car1 = "Saab";
    let car2 = "Volvo";
    let car3 = "BMW";

&#10147; However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

&#10147; The solution is an array!

&#10147; An array can hold many values under a single name, and you can access the values by referring to an index number.

### Creating an Array

&#10147; Using an array literal is the easiest way to create a JavaScript Array.
Syntax:

    let array_name = [item1, item2, ...];

<b>Note</b>&#10071; It is a common practice to declare arrays with the const keyword.

&#10147; Spaces and line breaks are not important. A declaration can span multiple lines:

    let cars = [
      "Saab",
      "Volvo",
      "BMW"
    ];

&#10147; You can also create an array, and then provide the elements:

    let cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";

### Access the Elements of an Array

&#10148; You access an array element by referring to the <b>index number</b>.

&#10148; This statement accesses the value of the first element in cars:

    let cars = ["Saab", "Volvo", "BMW"];
    let x = cars[0];

&#10148; Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...

&#10148; Array elements are accessed using their <b>index number</b>:

    let array_name = array[index];

### Changing an Array Element

&#10148; You access an array element by referring to the <b>index number</b>.

&#10148; This statement accesses the value of the first element in cars:

    let cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";


### Arrays are Objects

&#10148; Arrays are a special kind of objects, with numbered indexes.  

&#10148; If you check the type of a `typeof` operator on an array, it returns object:

    let person = ["John", "Doe", 46];
    typeof person;    // returns object

&#10148; JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array.

    let person = ["John", "Doe", 46];
    let x = person.length;     // person.length will return 3
    let y = person[0];         // person[0] will return "John"

&#10148; Objects use names to access its "members". In this example, person.firstName returns John:

    let person = {firstName:"John", lastName:"Doe", age:46};
    let x = person.length;     // person.length will return undefined
    let y = person[0];         // person[0] will return undefined
    let z = person["firstName"];    // person["firstName"] will return "John"

### Array Elements Can Be Objects

&#10148; JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array.

    let myArray = [];
    myArray[0] = Date.now;
    myArray[1] = myFunction;
    myArray[2] = myCars;

## Array Properties and Methods

<table>
  <tbody><tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_concat_array.asp">concat()</a></td>
    <td>Joins arrays and returns an array with the joined arrays</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_constructor_array.asp">constructor</a></td>
    <td>Returns the function that created the Array object's prototype</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_copywithin.asp">copyWithin()</a></td>
    <td>Copies array elements within the array, to and from specified positions</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_entries.asp">entries()</a></td>
    <td>Returns a key/value pair Array Iteration Object</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_every.asp">every()</a></td>
    <td>Checks if every element in an array pass a test</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_fill.asp">fill()</a></td>
    <td>Fill the elements in an array with a static value</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_filter.asp">filter()</a></td>
    <td>Creates a new array with every element in an array that pass a test</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_find.asp">find()</a></td>
    <td>Returns the value of the first element in an array that pass a test</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_findindex.asp">findIndex()</a></td>
    <td>Returns the index of the first element in an array that pass a test</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_foreach.asp">forEach()</a></td>
    <td>Calls a function for each array element</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_from.asp">from()</a></td>
    <td>Creates an array from an object</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_includes_array.asp">includes()</a></td>
    <td>Check if an array contains the specified element</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_indexof_array.asp">indexOf()</a></td>
    <td>Search the array for an element and returns its position</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_isarray.asp">isArray()</a></td>
    <td>Checks whether an object is an array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_join.asp">join()</a></td>
    <td>Joins all elements of an array into a string</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_keys.asp">keys()</a></td>
    <td>Returns a Array Iteration Object, containing the keys of the original array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_lastindexof_array.asp">lastIndexOf()</a></td>
    <td>Search the array for an element, starting at the end, and returns its position</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_length_array.asp">length</a></td>
    <td>Sets or returns the number of elements in an array</td>
  </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_map.asp">map()</a></td>
    <td>Creates a new array with the result of calling a function for each array element</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_pop.asp">pop()</a></td>
    <td>Removes the last element of an array, and returns that element</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_prototype_array.asp">prototype</a></td>
    <td>Allows you to add properties and methods to an Array object</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_push.asp">push()</a></td>
    <td>Adds new elements to the end of an array, and returns the new length</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_reduce.asp">reduce()</a></td>
    <td>Reduce the values of an array to a single value (going left-to-right)</td>
    </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_reduceright.asp">reduceRight()</a></td>
    <td>Reduce the values of an array to a single value (going right-to-left)</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_reverse.asp">reverse()</a></td>
    <td>Reverses the order of the elements in an array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_shift.asp">shift()</a></td>
    <td>Removes the first element of an array, and returns that element</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_slice_array.asp">slice()</a></td>
    <td>Selects a part of an array, and returns the new array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_some.asp">some()</a></td>
    <td>Checks if any of the elements in an array pass a test</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_sort.asp">sort()</a></td>
    <td>Sorts the elements of an array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_splice.asp">splice()</a></td>
    <td>Adds/Removes elements from an array</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_tostring_array.asp">toString()</a></td>
    <td>Converts an array to a string, and returns the result</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_unshift.asp">unshift()</a></td>
    <td>Adds new elements to the beginning of an array, and returns the new length</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_valueof_array.asp">valueOf()</a></td>
    <td>Returns the primitive value of an array</td>
    </tr>
</tbody></table>

&#10149; The real strength of JavaScript arrays are the built-in array properties and methods:

    let x = cars.length;   // The length property returns the number of elements
    let y = cars.sort();   // The sort() method sorts arrays

### The length Property

&#10149; The `length` property of an array returns the length of an array (the number of array elements).

#### Example

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.length;

#### Result:

    4

<b>Note</b>&#10071; The length property is always one more than the highest array index.

### Accessing the First Array Element

&#10149; This statement accesses the value of the first element in fruits:

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let first = fruits[0];

### Accessing the Last Array Element

&#10149; This statement accesses the value of the last element in fruits:

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let last = fruits[fruits.length - 1];

### Looping Array Elements

&#10149; The safest way to loop through an array, is using a "for" loop:

#### Example

    let fruits = ["Apple", "Banana", "Orange"];
    let fLen = fruits.length;

    for (let i = 0; i < fLen; i++) {
      console.log(fruits[i]);
    }

#### Result:

    Apple
    Banana
    Orange

&#10149; You can also use the Array.forEach() function:

#### Example

    let fruits = ["Apple", "Banana", "Orange"];

    fruits.forEach(myFunction);

    function myFunction(item, index) {
      console.log(index + ":" + item);
    }

#### Result:

    0:Apple
    1:Banana
    2:Orange

### Adding Array Elements

&#10150; The easiest way to add a new element to an array is using the `push()` method:

#### Example

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");   // Adds a new element (Lemon) to fruits

&#10150; New element can also be added to an array using the `length` property:

#### Example

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Lemon";    // Adds a new element (Lemon) to fruits

<b>Note</b>&#10071; Adding elements with high indexes can create undefined "holes" in an array:

#### Example

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[6] = "Lemon";    // Creates undefined "holes" in fruits

### Associative Arrays

&#10150; Many programming languages support arrays with named indexes.

&#10150; Arrays with named indexes are called associative arrays (or hashes).

&#10150; JavaScript does <b>not support</b> arrays with named indexes.

&#10150; In JavaScript, <b>arrays</b> always use <b>numbered indexes</b>.

#### Example

    let person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    let x = person.length;     // person.length will return 3
    let y = person[0];         // person[0] will return "John"

<b>Note</b>&#10071; If you use named indexes, JavaScript will redefine the array to a standard object.
After that, some array methods and properties will produce <b>incorrect results</b>.

#### Example

    let person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    let x = person.length;     // person.length will return 0
    let y = person[0];         // person[0] will return undefined

### The Difference Between Arrays and Objects

&#10151; In JavaScript, <b>arrays</b> use <b>numbered indexes</b>.

&#10151; In JavaScript, <b>objects</b> use <b>named indexes</b>.

<b>Note</b>&#10071; Arrays are a special kind of objects, with numbered indexes.

### When to Use Arrays. When to use Objects.

- JavaScript does not support associative arrays.
- You should use <b>objects</b> when you want the element names to be <b>strings (text)</b>.
- You should use <b>arrays</b> when you want the element names to be <b>numbers</b>.

### Avoid new Array()

&#10152; There is no need to use the JavaScript's built-in array constructor `new Array()`.

&#10152; Use `[]` instead.

#### These two different statements both create a new empty array named points:

    let points = new Array();     // Bad
    let points = [];              // Good

#### These two different statements both create a new array containing 6 numbers:

    let points = new Array(40, 100, 1, 5, 25, 10);     // Bad
    let points = [40, 100, 1, 5, 25, 10];              // Good

#### The `new` keyword can produce some unexpected results:

    let points = new Array(40, 100);     // Creates an array with two elements (40 and 100)

    let points = new Array(40);          // Creates an array with 40 undefined elements !!!!

### How to Recognize an Array

&#10153; The problem with `typeof` is that it will not return "array" for an array.

&#10153; In JavaScript, an array is an `object`.

    const fruits = ["Banana", "Orange", "Apple"];
    let type = typeof fruits;

#### Result:

    object

&#10153; The typeof operator returns object because a JavaScript array is an object.

#### Solution1

&#10153; You can solve this problem ECMAScript 5 (JavaScript 2009) defined a new `Array.isArray()` method.

    const fruits = ["Banana", "Orange", "Apple"];
    let type = Array.isArray(fruits);

#### Result:

    true

#### Solution2

&#10153; The `instanceof` operator returns true if an object is created by a given constructor:

    const fruits = ["Banana", "Orange", "Apple"];
    let type = fruits instanceof Array;

#### Result:

    true


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders20/photos/media.gif)
