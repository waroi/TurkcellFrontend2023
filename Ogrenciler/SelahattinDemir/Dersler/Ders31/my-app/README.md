[Turn Back](../../../)

<h1 align="center">Ders31 - React Components</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## React Components

&#10147; Components are like functions that return HTML elements.

&#10147; Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

&#10147; Components come in two types, Class components and Function components.

&#10147; Class components are ES6 classes that extend from React.Component. They must include the render method, and the return can only return one parent element.

### Create Your First Component

&#10147; When creating a React component, the component's name MUST start with an upper case letter.

#### Class Component

&#10147; A class component must include the `extends React.Component` statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

&#10147; The component also requires a `render()` method, this method returns HTML.

#### Example

    Create a Class component called ``Car``

      class Car extends React.Component {
        render() {
          return <h2>Hi, I am a Car!</h2>;
        }
      }

#### Function Component

&#10147; Here is the same example as above, but created using a Function component instead.

&#10147; A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

#### Example

    Create a Function component called ``Car``

      function Car() {
        return <h2>Hi, I am also a Car!</h2>;
      }

### Render Components

&#10148; Now your React application has a component called Car, which returns an `<h2>` element.

&#10148; To use this component in your application, use similar syntax as normal HTML: `<Car />`

#### Example

    Display the ``Car`` component in the "root" element:

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Car />);

#### Props

&#10148; Components can be passed as props, which stands for properties.

&#10148; Props are like function arguments, and you send them into the component as attributes.

#### Example

    Use an attribute to pass a color to the Car component, and use it in the render() function:

      function Car(props) {
        return <h2>I am a {props.color} Car!</h2>;
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Car color="red"/>);

### Components in Components

&#10148; Components can also be nested, meaning that you can include a component inside another component.

&#10148; To nest a component, simply render it inside the parent component.

&#10148; We can refer to components inside other components:

#### Example

    Use the Car component inside the Garage component:

    Then render the ``Garage`` component inside the ``root`` element:

      function Car() {
        return <h2>I am a Car!</h2>;
      }

      function Garage() {
        return (
          <>
            <h1>Who lives in my Garage?</h1>
            <Car />
          </>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Garage />);

### Components in Files

&#10148; Components can also be saved in separate files, like `Car.js`.

&#10148; The component is still imported into the `App.js` file, but now the component is imported from a separate file:

<b>Note</b>&#10071; Note that the filename must start with an uppercase character.

#### Example

    Create a file called ``Car.js``, with the same code as above:

      function Car() {
        return <h2>I am a Car!</h2>;
      }

      export default Car;

    Import the Car component, and display it as a component:

      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import Car from './Car.js';

      function Garage() {
        return (
          <>
            <h1>Who lives in my Garage?</h1>
            <Car />
          </>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Garage />);

## React JSX

&#10149; JSX stands for JavaScript XML.

&#10149; JSX allows us to write HTML in React.

&#10149; JSX makes it easier to write and add HTML in React.

&#10149; JSX converts HTML tags into react elements.

&#10149; JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

&#10149; JSX tags have a tag name, attributes, and children.

&#10149; JSX is not a necessity to write React applications.

&#10149; JSX makes your react code simpler and elegant.

&#10149; JSX ultimately transpiles to pure JavaScript, so there is no performance impact.

### Coding JSX

&#10149; JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` and/or `appendChild()` methods.

&#10149; JSX converts HTML tags into react elements.

<b>Note</b>&#10071; You are not required to use JSX, but JSX makes it easier to write React applications.

&#10149; Here are two examples. The first uses JSX and the second does not:

#### Example

    Example using JSX:

      const myelement = <h1>I Love JSX!</h1>;

    Example without JSX:

      const myelement = React.createElement('h1', {}, 'I do not use JSX!');

&#10149; As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

&#10149; JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

### Expressions in JSX

&#10149; With JSX you can write expressions inside curly braces `{}`.

&#10149; The expression can be a React variable, or property, or any other valid JavaScript expression.

#### Example

    Render a variable as a child element:

      const myelement = <h1>{5 + 5}</h1>;

    Render a variable value as a property value:

      const myelement = <input type="text" value={myvar} />;

### Inserting a Large Block of HTML

&#10149; To render a large block of HTML, we can write a valid JSX expression inside parentheses `()`.

#### Example

    Render a multi-line block of HTML:

      const myelement = (
        <table>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <td>John</td>
          </tr>
          <tr>
            <td>Elsa</td>
          </tr>
        </table>
      );

### One Top Level Element

&#10150; The HTML code must be wrapped in one top level element.

&#10150; This is because the `ReactDOM.render()` method only renders one element to the DOM.

&#10150; If you have, for example, a div element and you want to return multiple elements, then you must use a parent container element inside the `ReactDOM.render()` method, adjacent to the div element.

#### Example

    Return multiple elements:

      const myelement = (
        <div>
          <h1>I am a Header.</h1>
          <h1>I am a Header too.</h1>
        </div>
      );

      ReactDOM.render(myelement, document.getElementById('root'));

<b>Note</b>&#10071; JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

&#10150; Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

&#10150; A fragment looks like an empty HTML tag: <></>.

#### Example

    Return multiple elements:

      const myelement = (
        <>
          <h1>I am a Header.</h1>
          <h1>I am a Header too.</h1>
        </>
      );

      ReactDOM.render(myelement, document.getElementById('root'));

### Elements Must be Closed

&#10150; JSX elements must be closed either by adding a "/" at the end of the tag (like XML), or by adding the closing tag (like HTML).

#### Example

    Close empty elements with />

      const myelement = <input type="text" />;

<b>Note</b>&#10071; JSX will throw an error if the HTML is not properly closed.

### Attribute class = className

&#10150; The `class` attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the `class` keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

<b>Note</b>&#10071; Use attribute className instead.

&#10150; JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

#### Example

    Use attribute ``className`` instead of ``class`` in JSX:

      const myelement = <h1 className="big">I am a Big Header</h1>;

### Conditions - if statements

&#10150; It is common to have conditions in React rendering methods.

&#10150; JSX is an extension of the JavaScript language based on ES6, and therefore JSX can be used just like any other valid JavaScript code.

&#10150; We can use if statements inside JSX blocks.

&#10150; React supports if statements, but not inside JSX.

&#10150; To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

#### Option 1:

Write if statements outside of the JSX code:

#### Example

    Use an if statement to define what content to display:

      const x = 5;
      let text = "Goodbye";
      if (x < 10) {
        text = "Hello";
      }

      const myElement = <h1>{text}</h1>;

      ReactDOM.render(myelement, document.getElementById('root'));

#### Option 2:

Use a ternary expression:

#### Example

    Use a ternary expression to display either "Hello" or "Goodbye":

      const x = 5;
      const myelement = <h1>{x > 10 ? "Hello" : "Goodbye"}</h1>;

      ReactDOM.render(myelement, document.getElementById('root'));

<b>Note</b>&#10071; that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders31/my-app/media.jpg)
