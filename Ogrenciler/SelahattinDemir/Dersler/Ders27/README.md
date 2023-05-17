[Turn Back](../../)

<h1 align="center">Ders27 - JavaScript OOP - ES6 - Class</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## JavaScript Classes

&#10147; JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

&#10147; JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

&#10147; JavaScript classes were introduced in ECMAScript 2015.

### JavaScript Class Syntax

&#10147; Use the `class` keyword to create a class.

&#10147; Always add a method named `constructor()`:

#### Syntax

    class ClassName {
      constructor() { ... }
    }

#### Example

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
    }

    mycar = new Car("Ford");
    document.getElementById("demo").innerHTML = mycar.carname;

&#10147; The example above creates a class named "Car".

&#10147; The class has two initial properties: "name" and "year".

<b>Note</b>&#10071; A JavaScript class is <b>not</b> an object. It is a <b>template</b> for JavaScript objects.

### Using a Class

&#10147; To use a class in your code, use the `new` keyword:

&#10147; When you have a class, you can use the class to create objects:

#### Example

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
    }

    const myCar1 = new Car("Ford", 2014);
    const myCar2 = new Car("Audi", 2019);

&#10147; The example above uses the <b>Car class</b> to create two <b>Car objects</b>.

<b>Note</b>&#10071; The constructor method is called automatically when a new object is created.

### The Constructor Method

&#10148; The `constructor()` method is a special method for creating and initializing an object created with a class.

- The `constructor()` method is called automatically when a new object is created.
- The `constructor()` method is used to initialize class properties.
- The `constructor()` method is called with the `new` keyword.
- The `constructor()` method must have `exact` name of `constructor`.
- The `constructor()` method is always called when the class is instantiated.

&#10148; The `constructor()` method is optional. If you do not provide a `constructor()` method, JavaScript will add an empty `constructor()` method.

&#10148; There can only be one special method with the name `constructor` in a class. Having more than one occurrence of a `constructor` method in a class will throw a SyntaxError error.

### Class Methods

&#10148; Class methods are created with the same syntax as object methods.

&#10148; Use the `keyword` `class` to create a class.

&#10148; Always add a `constructor()` method.

&#10148; Then add any number of methods.

#### Syntax

    class ClassName {
      constructor() { ... }
      method_1() { ... }
      method_2() { ... }
      method_3() { ... }
    }

#### Example

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
      present() {
        return 'I have a ' + this.carname;
      }
    }

    mycar = new Car("Ford");
    document.getElementById("demo").innerHTML = mycar.present();

&#10148; The example above creates a class named "Car".

&#10148; The class has two initial properties: "name" and "year".

&#10148; The class has one method: "present()".

&#10148; The `present()` method returns a string with a car name.

&#10148; You can send parameters to Class methods:

#### Example

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
      present(x) {
        return x + ', I have a ' + this.carname;
      }
    }

    mycar = new Car("Ford");
    document.getElementById("demo").innerHTML = mycar.present("Hello");

## Class Inheritance

&#10149; To create a class inheritance, use the ``extends`` keyword.

&#10149; A class created with a class inheritance inherits all the methods from another class:

#### Example

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
      present() {
        return 'I have a ' + this.carname;
      }
    }

    class Model extends Car {
      constructor(brand, mod) {
        super(brand);
        this.model = mod;
      }
      show() {
        return this.present() + ', it is a ' + this.model;
      }
    }

    mycar = new Model("Ford", "Mustang");
    document.getElementById("demo").innerHTML = mycar.show();

&#10149; A constructor can use the `super` keyword to call the constructor of the super class.

&#10149; The `super` keyword is used to access and call functions on an object's parent.

&#10149; The `super` keyword can also be used to call functions on a parent object.

<b>Note</b>&#10071; Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

### Getters and Setters

&#10149; Classes also allows you to use `getters` and `setters`.

&#10149; It can be smart to use `getters` and `setters` for your properties, especially if you want to do something special with the value before returning them, or before you set them.

&#10149; To add getters and setters in the class, use the `get` and `set` keywords.

#### Example
    Create a getter and a setter for the "carname" property:
      class Car {
        constructor(brand) {
          this.carname = brand;
        }
        get cnam() {
          return this.carname;
        }
        set cnam(x) {
          this.carname = x;
        }
      }

      mycar = new Car("Ford");
      document.getElementById("demo").innerHTML = mycar.cnam;

<b>Note</b>&#10071; Even if the getter is a method, you do not use parentheses when you want to get the property value.

&#10149; The name of the getter/setter method cannot be the same as the name of the property, in this case ``carname``.

&#10149; Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

#### Example
    You can use the underscore character to separate the getter/setter from the actual property:
      class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }

      mycar = new Car("Ford");
      document.getElementById("demo").innerHTML = mycar.carname;

&#10149; To use a setter, use the same syntax as when you set a property value, without parentheses:

#### Example
    Set the "carname" property using a setter:
    Use a setter to change the carname to "Volvo":
      class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }

      mycar = new Car("Ford");
      mycar.carname = "Volvo";
      document.getElementById("demo").innerHTML = mycar.carname;

### Hoisting

&#10149; Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

&#10149; That means that you must declare a class before you can use it:

#### Example
    //You cannot use the class yet.
    //mycar = new Car("Ford");    // ERROR

    class Car {
      constructor(brand) {
        this.carname = brand;
      }
    }

    //Now you can use the class:
    mycar = new Car("Ford");

<b>Note</b>&#10071; For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).

## Static Methods

&#10150; Static methods are defined on the class itself, and not on the prototype.

&#10150; That means you cannot call a ``static`` method on the object (mycar), but on the class (Car):

#### Example
    class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
    }

    const myCar = new Car("Ford");

    // You can call 'hello()' on the Car Class:
    document.getElementById("demo").innerHTML = Car.hello();

    // But NOT on a Car Object:
    // document.getElementById("demo").innerHTML = myCar.hello();
    // this will raise an error.

&#10150; If you want to use the myCar object inside the static method, you can send it as a parameter:

#### Example

    class Car {
      constructor(name) {
        this.name = name;
      }
      static hello(x) {
        return "Hello " + x.name;
      }
    }
    const myCar = new Car("Ford");
    document.getElementById("demo").innerHTML = Car.hello(myCar);


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders27/photos/media.jpg)
