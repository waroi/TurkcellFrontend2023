[Turn Back](../../../)

<h1 align="center">Ders34 - React Styling-Portal</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## Contents:

- [Categories](#categories)
  - [React Styling](#react-styling)
  - [Portals](#portals)
  - [Example Website](#example-website)

## React Styling

&#10145; There are several ways to style React components.

&#10145; You can use CSS, inline styles, or CSS-in-JS libraries.

&#10145; You can also use CSS preprocessors like Sass or Less.

&#10145; You can also use CSS modules.

&#10145; You can also use CSS-in-JS libraries like Styled Components or Emotion.

&#10145; You can also use CSS frameworks like Bootstrap or Tailwind.

&#10145; You can also use CSS-in-JS frameworks like Material UI or Chakra UI.

### Inline Styling

&#10146; Inline styling is when you add styles directly to an element.

&#10146; Inline styles are added as a JavaScript object.

&#10146; The keys are the CSS properties and the values are the CSS values.

&#10146; Inline styles are added to an element using the ``style`` attribute.

#### Example

    Here is an example of inline styling:

      import React from "react";

      function App() {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h1 style={{ color: "white" }}>Hello World!</h1>
          </div>
        );
      }

<b>Note</b>&#10071; In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces ``{{}}``.

### camelCased Property Names

&#10146; In React, CSS property names are written in camelCase.

&#10146; For example, ``background-color`` becomes ``backgroundColor``.

#### Example

    Use ``backgroundColor`` instead of ``background-color``:

      import React from "react";

      function App() {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h1 style={{ color: "white" }}>Hello World!</h1>
          </div>
        );
      }

### JavaScript Object

&#10146; Inline styles are added as a JavaScript object.

&#10146; The keys are the CSS properties and the values are the CSS values.

#### Example

    Create a style object named ``myStyle``:

      import React from "react";

      function App() {
        const myStyle = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Sans-Serif"
        };
        return (
          <div style={myStyle}>
            <h1 style={{ color: "white" }}>Hello World!</h1>
          </div>
        );
      }

### CSS Stylesheet

&#10146; You can write your CSS styling in a separate file, just save the file with the .css file extension.

&#10146; You can import the stylesheet into your component.

&#10146; Then, you can add a ``className`` attribute to your element.

&#10146; The ``className`` attribute is used to add a class to an element.

&#10146; The class name is the name of the class in the CSS stylesheet.

#### Example

    Here is an example of adding a class to an element:

      import React from "react";
      import "./styles.css";

      function App() {
        return (
          <div className="myDiv">
            <h1>Hello World!</h1>
          </div>
        );
      }

<b>Note</b>&#10071; You can call the file whatever you like, just remember the correct file extension.

<b>Note</b>&#10071; The ``className`` attribute is used instead of the ``class`` attribute because ``class`` is a reserved word in JavaScript.

### CSS Modules

&#10147; Another way of adding styles to your application is to use CSS Modules.

&#10147; CSS Modules are convenient for components that are placed in separate files.

<b>Note</b>&#10071; The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

&#10147; Create the CSS module with the .module.css extension, example: my-style.module.css.

#### Example

    Create a new file called "my-style.module.css" and insert some CSS code in it:

    my-style.module.css:

      .bigblue {
        color: DodgerBlue;
        padding: 40px;
        font-family: Sans-Serif;
        text-align: center;
      }

&#10147; Import the CSS module into your component:

#### Example

    Import the CSS module into your component:

      import React from "react";
      import styles from "./my-style.module.css";

      function App() {
        return (
          <div className={styles.bigblue}>
            <h1>Hello World!</h1>
          </div>
        );
      }

### CSS Preprocessors

&#10147; CSS preprocessors are programs that allow you to generate CSS from the preprocessor's own unique syntax.

&#10147; CSS preprocessors add features that are not available in CSS, such as variables, nesting, mixins, inheritance, and more.

&#10147; CSS preprocessors are used to make CSS code more maintainable, modular, and reusable.

&#10147; CSS preprocessors are used to make the code more readable and easier to work with.


### CSS-in-JS

&#10148; CSS-in-JS is a styling technique that allows you to write CSS code inside JavaScript.

&#10148; CSS-in-JS libraries allow you to write CSS code inside JavaScript.

&#10148; CSS-in-JS libraries allow you to use JavaScript to style your components.


### CSS Frameworks

&#10148; CSS frameworks are libraries that contain pre-written CSS code.

&#10148; CSS frameworks are used to make styling easier and faster.

&#10148; CSS frameworks are used to make the code more readable and easier to work with.

&#10148; CSS frameworks are used to make the code more maintainable, modular, and reusable.

&#10148; CSS frameworks are used to make the code more responsive.

&#10148; CSS frameworks are used to make the code more compatible with different browsers.


## Portals

&#10149; Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

&#10149; A typical use case for portals is when a parent component has an ``overflow: hidden`` or ``z-index`` style, but you need the child to visually “break out” of its container.

&#10149; For example, dialogs, hovercards, and tooltips.

&#10149; Portals also allow you to render a child into a different DOM subtree.

&#10149; For example, when you want to create a modal, you can use a portal to render a child into a ``<div>`` that exists outside the DOM hierarchy of the parent component.

&#10149; The first argument (child) is any renderable React child, such as an element, string, or fragment.

&#10149; The second argument (container) is a DOM element.

#### Example

    Here is an example of a portal:

      import React from "react";
      import ReactDOM from "react-dom";

      function App() {
        return ReactDOM.createPortal(
          <h1>Hello World!</h1>,
          document.getElementById("root")
        );
      }


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders34/styled-app/src/assets/media.jpg)
