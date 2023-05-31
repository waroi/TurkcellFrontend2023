[Turn Back](../../../)

<h1 align="center">Ders33 - React Hooks</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## Contents:

- [Categories](#categories)
  - [React Hooks](#react-hooks)
  - [React useState Hook](#react-usestate-hook)
  - [React useEffect Hooks](#react-useeffect-hooks)
  - [Example Website](#example-website)

## React Hooks

&#10147; Hooks were added to React in version 16.8.

&#10147; Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

<b>Note</b>&#10071; Although Hooks generally replace class components, there are no plans to remove classes from React.

### What is a Hook?

&#10147; Hooks allow us to "hook" into React features such as state and lifecycle methods.

&#10147; For example, the useState Hook allows you to add React state to a function component.

#### Example

    Here is an example of a Hook
      import React, { useState } from "react";
      import ReactDOM from "react-dom/client";

      function FavoriteColor() {
      const [color, setColor] = useState("red");

      return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Green</button>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />); 

&#10147; You must ``import`` Hooks from ``react``.

&#10147; Here we are using the ``useState`` Hook to keep track of the application state.

&#10147; State generally refers to application data or properties that need to be tracked.

### Hook Rules

&#10147; There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.

<b>Note</b>&#10071; Hooks will not work in React class components.

### Custom Hooks

&#10147; If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

&#10147; Custom Hooks are functions that start with the word "use".

&#10147; Here is an example of a custom Hook:

#### Example

    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";

    function useFavoriteColor() {
      const [color, setColor] = useState("red");

      return {
        color,
        setColor
      };
    }

    function FavoriteColor() {
      const { color, setColor } = useFavoriteColor();

      return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Pink</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Green</button>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />);

&#10147; Here we have created a custom Hook called ``useFavoriteColor``.

&#10147; The ``useFavoriteColor`` Hook returns an object with a ``color`` property and a ``setColor`` method.

&#10147; We can use the ``useFavoriteColor`` Hook in the ``FavoriteColor`` component.

## React useState Hook

&#10148; The ``useState`` Hook allows you to add state to a function component.

&#10148; State generally refers to data or properties that need to be tracking in an application.

### Import useState

&#10148; To use the ``useState`` Hook, you must import it from ``react``.

#### Example
    At the top of your component, ``import`` the ``useState`` Hook.

      import React, { useState } from "react";

&#10148; Notice that we are destructuring ``useState`` from ``react`` as it is a named export.

### Initialize State

&#10148; To initialize state, you call the ``useState`` Hook and pass in the initial state value.

&#10148; ``useState`` accepts an initial state and returns two values:

- The current state.
- A function that updates the state.

#### Example
    Initialize state at the top of the function component.

      import { useState } from "react";

      function FavoriteColor() {
        const [color, setColor] = useState("");
      }

&#10148; Notice that again, we are destructuring the returned values from ``useState``.

&#10148; The first value, ``color``, is our current state.

&#10148; The second value, ``setColor``, is the function that is used to update our state.

<b>Note</b>&#10071; These names are variables that can be named anything you would like.

&#10148; Lastly, we set the initial state to an empty string: ``useState("")``

### Read State

&#10149; We can now include our state anywhere in our component.

#### Example
    Here we are displaying the current state in an ``h1`` element.

      import { useState } from "react";

      function FavoriteColor() {
        const [color, setColor] = useState("red");

        return (
          <h1>My favorite color is {color}!</h1>
        );
      }

### Update State

&#10149; To update state, we call the function that was returned from ``useState``.

<b>Note</b>&#10071; We should never directly update state. Ex: ``color = "red"`` is not allowed.

#### Example
    Here we are updating the state when a button is clicked.

      import { useState } from "react";

      function FavoriteColor() {
        const [color, setColor] = useState("red");

        return (
          <>
            <h1>My favorite color is {color}!</h1>
            <button
              type="button"
              onClick={() => setColor("blue")}
            >Blue</button>
            <button
              type="button"
              onClick={() => setColor("red")}
            >Red</button>
            <button
              type="button"
              onClick={() => setColor("pink")}
            >Pink</button>
            <button
              type="button"
              onClick={() => setColor("green")}
            >Green</button>
          </>
        );
      }

### What Can State Hold

&#10149; The ``useState`` Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

&#10149; We could create multiple state Hooks to track individual values.

#### Example
    Create multiple state Hooks:

      import { useState } from "react";

      function FavoriteColor() {
        const [brand, setBrand] = useState("Ford");
        const [model, setModel] = useState("Mustang");
        const [year, setYear] = useState("1964");
        const [color, setColor] = useState("red");

        return (
          <>
            <h1>My {brand}</h1>
             <p>
                It is a {color} {model} from {year}.
             </p>
          </>
        );
      }

&#10149; Or, we can just use one state and include an object instead!

#### Example
    Create a single Hook that holds an object:

      import { useState } from "react";

      function FavoriteColor() {
        const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
        });

        return (
          <>
            <h1>My {car.brand}</h1>
             <p>
                It is a {car.color} {car.model} from {car.year}.
             </p>
          </>
        );
      }

<b>Note</b>&#10071; Since we are now tracking a single object, we need to reference that object and then the property of that object when rendering the component. (Ex: ``car.brand``)

### Updating Objects and Arrays in State

&#10149; When updating state, we need to be careful when working with objects and arrays.

&#10149; If we want to update an object or array in state, we need to make sure we are not mutating the original object or array.

&#10149; We can do this by using the spread operator.

#### Example
    Here we are updating the ``car`` object in state.

      import { useState } from "react";

      function FavoriteColor() {
        const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
        });

        const updateColor = () => {
          setCar(previousState => {
            return { ...previousState, color: "blue" }
          });
        }

        return (
          <>
            <h1>My {car.brand}</h1>
             <p>
                It is a {car.color} {car.model} from {car.year}.
             </p>
             <button
               type="button"
               onClick={updateColor}
                >Blue
             </button>
          </>
        );
      }

&#10149; Because we need the current value of state, we pass a function into our ``setCar`` function. This function receives the previous value.

&#10149; We then return an object, spreading the ``previousState`` and overwriting only the color.

## React useEffect Hooks

&#10150; The ``useEffect`` Hook allows you to perform side effects in function components.

&#10150; Side effects are things like fetching data, setting up subscriptions, or manually changing the DOM.

&#10150; Side effects should not be done in the render phase of a component.

&#10150; The ``useEffect`` Hook allows you to perform side effects after the render phase is complete.

&#10150; ``useEffect`` accepts two arguments. The second argument is optional.

&#10150; ``useEffect(<function>, <dependency>)``

&#10150; Let's use a timer as an example.

#### Example
    Use ``setTimeout()`` to count 1 second after initial render:

      import { useState, useEffect } from "react";

      function Timer()() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          setTimeout(() => {
            setCount((count) => count + 1);
          }, 1000);
        });

        return <h1>I've rendered {count} times!</h1>;
      }

&#10150; But wait!! It keeps counting even though it should only count once!

&#10150; ``useEffect`` runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

&#10150; This is not what we want. There are several ways to control when side effects run.

&#10150; We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

#### Example
    1. No dependency passed:

      useEffect(() => {
        //Runs on every render
      });

#### Example
    2. An empty array:

      useEffect(() => {
        //Runs only on the first render
      }, []);
#### Example
    3. Props or state values:

      useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
      }, [prop, state]);

&#10150; So, to fix this issue, let's only run this effect on the initial render.

#### Example
    Only run the effect on the initial render:

      import { useState, useEffect } from "react";

      function Timer()() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          setTimeout(() => {
            setCount((count) => count + 1);
          }, 1000);
        }, []); // <- add empty brackets here

        return <h1>I've rendered {count} times!</h1>;
      }

&#10150; Now, the effect will only run on the initial render.

#### Example:
    Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

        import { useState, useEffect } from "react";
    
        function Timer()() {
            const [count, setCount] = useState(0);
            const [calculation, setCalculation] = useState(0);
    
            useEffect(() => {
                setCalculation(() => count * 2);
            }, [count]); // <- add the count variable here
    
            return (
                <>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount((c) => c + 1)}>+</button>
                    <p>Calculation: {calculation}</p>
                </>
            );
        }

&#10150; If there are multiple dependencies, they should be included in the useEffect dependency array.

### Effect Cleanup

&#10151; Some effects require cleanup to reduce memory leaks.

&#10151; Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

&#10151; We do this by including a return function at the end of the useEffect Hook.

#### Example
    Clean up the timer at the end of the ``useEffect`` Hook:

        import { useState, useEffect } from "react";
    
        function Timer()() {
            const [count, setCount] = useState(0);
    
            useEffect(() => {
                const timer = setTimeout(() => {
                    setCount((count) => count + 1);
                }, 1000);
    
                return () => clearTimeout(timer);
            }, []);
    
            return <h1>I've rendered {count} times!</h1>;
        }

<b>Note</b>&#10071; To clear the timer, we had to name it.


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders33/vite-react/src/assets/media.gif)
