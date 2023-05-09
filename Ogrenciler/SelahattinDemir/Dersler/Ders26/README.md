[Turn Back](../../)

<h1 align="center">Ders26 - JavaScript Object Constructors</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Object Constructors

&#10147; JavaScript provides a special constructor function called an Object Constructor for creating and initializing objects.

&#10147; The object constructor is called with the `new` keyword.

&#10147; The parameters are the property values:

#### Example

    // Create an object constructor function called Person
    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    // Create two Person objects
    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");

    // Display age
    document.getElementById("demo").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";

<b>Note</b>&#10071; It is considered good practice to name constructor functions with an upper-case first letter.

<b>Note</b>&#10071; In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

### Object Types (Blueprints) (Classes)

&#10147; The examples from the previous chapters are limited. They only create single objects.

&#10147; Sometimes we need a <b>"blueprint"</b> for creating many objects of the same "type".

&#10147; The way to create an "object type", is to use an <b>object constructor function</b>.

&#10147; In the example above, function `Person()` is an object constructor function.

&#10147; Objects of the same type are created by calling the constructor function with the `new` keyword:

#### Example

    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");

### The JavaScript `this` Keyword

&#10147; In JavaScript, the thing called `this`, is the <b>object</b> that "owns" the code.

&#10147; The value of `this`, when used in an object, is the object itself.

&#10147; In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

<table>
<tbody><tr><td>In an object method, <code>this</code> refers to the <b>object</b>.</td></tr>
<tr><td>Alone, <code>this</code> refers to the <b>global object</b>.</td></tr>
<tr><td>In a function, <code>this</code> refers to the <b>global object</b>.</td></tr>
<tr><td>In a function, in strict mode, <code>this</code> is <code>undefined</code>.</td></tr>
<tr><td>In an event, <code>this</code> refers to the <b>element</b> that received the event.</td></tr>
<tr><td>Methods like <code>call()</code>, <code>apply()</code>,
and <code>bind()</code> can refer <code>this</code> to <b>any object</b>.</td></tr>
</tbody></table>

<b>Note</b>&#10071; `this` is not a variable. It is a keyword. You cannot change the value of `this`.

#### Example

    // Create an object constructor function called Person
    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    // Create two Person objects
    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");

    // Display age
    document.getElementById("demo").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";

### Adding a Property to an Object

&#10147; You can add new properties to an existing object by simply giving it a value.

&#10147; Assume that the person object already exists - you can then give it new properties:

    myFather.nationality = "English";

### Adding a Method to an Object

&#10148; You can add new methods to an existing object by simply giving it a value.

&#10148; The following example adds a new method named `name` to the person object:

    myFather.name = function() {
      return this.firstName + " " + this.lastName;
    };

&#10148; The property will be added to myFather. Not to myMother. (Not to any other person objects).

### Adding a Property to a Constructor

&#10148; You cannot add a new property to an object constructor the same way you add a new property to an existing object:

    Person.nationality = "English";

&#10148; To add a new property to a constructor, you must add it to the constructor function:

#### Example

    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
      this.nationality = "English";
    }

<b>Note</b>&#10071; This way object properties can have default values.

### Adding a Method to a Constructor

&#10148; You cannot add a new method to an object constructor the same way you add a new method to an existing object:

    Person.name = function() {
      return this.firstName + " " + this.lastName;
    };

&#10148; To add a new method to a constructor, you must add it to the constructor function:

#### Example

    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
      this.name = function() {
        return this.firstName + " " + this.lastName;
      };
    }

&#10148; The changeName() function assigns the value of name to the person's lastName property.

#### Example

    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
      this.changeName = function(name) {
        this.lastName = name;
      };
    }

    var myMother = new Person("Sally", "Rally", 48, "green");
    myMother.changeName("Doe");

&#10148; JavaScript knows which person you are talking about by "substituting" this with myMother.

### Built-in JavaScript Constructors

&#10148; JavaScript has built-in constructors for native objects:

- `new String()`
- `new Number()`
- `new Boolean()`
- `new Array()`
- `new RegExp()`
- `new Function()`
- `new Date()`
- `new Error()`

&#10148; These constructors are used to create new `String`, `Number`, `Boolean`, `Array`, `RegExp`, `Function`, `Date`, and `Error` objects.

&#10148; You cannot add new properties or methods to these objects.

&#10148; Adding a new property to a built-in constructor must be done directly on the constructor function:

<b>Note</b>&#10071; The `Math()` object is not in the list. `Math` is a global object. The `new` keyword cannot be used on `Math`.

#### Example

    String.prototype.myUppercase = function() {
      return this.toUpperCase();
    };

    var txt = new String("Hello World!");
    txt.myUppercase();

### Did You Know?

&#10149; As you can see above, JavaScript has object versions of the primitive data types `String`, `Number`, and `Boolean`. But there is no reason to create complex objects. Primitive values are much faster:

- Use string literals `""` instead of `new String()`.
- Use number literals `123` instead of `new Number()`.
- Use boolean literals `true/false` instead of `new Boolean()`.
- Use array literals `[]` instead of `new Array()`.
- Use object literals `{}` instead of `new Object()`.
- Use pattern literals `/()/` instead of `new RegExp()`.
- Use function declarations `function(){};` instead of `new Function()`.

#### Example

    let x1 = "";             // new primitive string
    let x2 = 0;              // new primitive number
    let x3 = false;          // new primitive boolean

    const x4 = {};           // new Object object
    const x5 = [];           // new Array object
    const x6 = /()/          // new RegExp object
    const x7 = function(){}; // new function

## JavaScript Object Prototypes

&#10149; All JavaScript objects inherit properties and methods from a prototype.

&#10149; The `Object.prototype` is on the top of the prototype inheritance chain:

    Date objects, Array objects, and Person objects inherit from Object.prototype.

&#10149; Adding Properties and Methods to Objects

&#10149; Sometimes you want to add new properties (or methods) to all existing objects of a given type.

&#10149; Sometimes you want to add new properties (or methods) to an object constructor.

&#10149; The JavaScript prototype property allows you to add new properties to object constructors:

### Prototype Inheritance

&#10149; All JavaScript objects inherit properties and methods from a prototype.

- `Date` objects inherit from `Date.prototype`
- `Array` objects inherit from `Array.prototype`
- `Person` objects inherit from `Person.prototype`

&#10149; The `Object.prototype` is on the top of the prototype inheritance chain:

    ``Date`` objects, ``Array`` objects, and ``Person`` objects inherit from Object.prototype.

### Adding Properties and Methods to Objects

&#10149; Sometimes you want to add new properties (or methods) to all existing objects of a given type.

&#10149; Sometimes you want to add new properties (or methods) to an object constructor.

### Using the prototype Property

&#10149; The JavaScript `prototype` property allows you to add new properties to object constructors:

#### Example

    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
    }

    Person.prototype.nationality = "English";

&#10149; The JavaScript `prototype` property also allows you to add new methods to objects constructors:

#### Example

    function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
    }

    Person.prototype.name = function() {
      return this.firstName + " " + this.lastName;
    };

&#10149; The JavaScript `prototype` property also allows you to add new methods to objects constructors:

<b>Note</b>&#10071; Only modify your <b>own</b> prototypes. Never modify the prototypes of standard JavaScript objects.

## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders26/photos/media.jpg)
