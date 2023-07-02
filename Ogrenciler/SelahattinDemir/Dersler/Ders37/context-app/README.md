[Turn Back](../../../)

<h1 align="center">Ders37 - React Context</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## Contents:

- [Categories](#categories)
  - [React Context](#react-context)
  - [useReducer](#usereducer)
  - [useContext with useReducer](#usecontext-with-usereducer)
  - [Example Website](#example-website)

## React Context

&#10145; React Context is a way to manage state globally.

&#10145; It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

### The Problem

&#10145; State should be held by the highest parent component in the stack that requires access to the state.

&#10145; To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

&#10145; To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

#### Example

    Passing "props" through nested components:
      import { useState } from "react";
      import ReactDOM from "react-dom/client";

      function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
          <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
          </>
        );
      }

      function Component2({ user }) {
        return (
          <>
            <h1>Component 2</h1>
            <Component3 user={user} />
          </>
        );
      }

      function Component3({ user }) {
        return (
          <>
            <h1>Component 3</h1>
            <Component4 user={user} />
          </>
        );
      }

      function Component4({ user }) {
        return (
          <>
            <h1>Component 4</h1>
            <Component5 user={user} />
          </>
        );
      }

      function Component5({ user }) {
        return (
          <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
          </>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Component1 />);

&#10145; This is a simple example, but imagine if we had 10 or 20 nested components. It would be a lot of work to pass the state through each component.


### The Solution

&#10146; The solution is to create context.

### Create Context

&#10146; To create context, you must Import createContext and initialize it:

    import { createContext } from "react";

    const UserContext = createContext();

&#10146; Next we'll use the Context Provider to wrap the tree of components that need the state Context.

### Context Provider

&#10146; The Context Provider is a component that provides the state to all nested components.

&#10146; The Context Provider is created by calling the Context object we created earlier.

&#10146; The Context Provider takes a value prop that is the state we want to share.

&#10146; The Context Provider wraps the tree of components that need the state.

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 user={user} />
        </UserContext.Provider>
      );
    }

&#10146; Now we can access the state in any nested component by using the useContext Hook.

### useContext Hook

&#10146; The useContext Hook takes the Context object we created earlier and returns the state.

&#10146; In order to use the Context in a child component, we need to access it using the useContext Hook.

&#10146; First, include the useContext in the import statement

    import { useState, createContext, useContext } from "react";

&#10146; Then you can access the user Context in all components:

    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }

&#10146; Now we can access the state in any nested component by using the useContext Hook.

### Full Example

    import { useState, createContext, useContext } from "react";
    import ReactDOM from "react-dom/client";

    const UserContext = createContext();

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 user={user} />
        </UserContext.Provider>
      );
    }

    function Component2({ user }) {
      return (
        <>
          <h1>Component 2</h1>
          <Component3 user={user} />
        </>
      );
    }

    function Component3({ user }) {
      return (
        <>
          <h1>Component 3</h1>
          <Component4 user={user} />
        </>
      );
    }

    function Component4({ user }) {
      return (
        <>
          <h1>Component 4</h1>
          <Component5 user={user} />
        </>
      );
    }

    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Component1 />);

## useReducer

&#10147; Context can be used with a reducer to manage state.

&#10147; The reducer is a function that takes the current state and an action and returns the new state.

&#10147; The reducer is used with the useReducer Hook.

&#10147; The useReducer Hook takes the reducer and the initial state and returns the current state and a dispatch function.

&#10147; The dispatch function is used to send actions to the reducer.

&#10147; The ``useReducer`` Hook is similar to the ``useState`` Hook.

&#10147; It allows for custom state logic.

&#10147; If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

### Syntax

&#10147; The useReducer Hook accepts two arguments.

``useReducer(<reducer>, <initialState>)``

&#10147; The ``reducer`` function contains your custom state logic and the ``initialState`` can be a simple value but generally will contain an object.

&#10147; The ``useReducer`` Hook returns the current ``state`` and a ``dispatch`` method.

&#10147; Here is an example of ``useReducer`` in a counter app:

#### Example

    import { useReducer } from "react";
    import ReactDOM from "react-dom/client";

    const initialTodos = [
      {
        id: 1,
        title: "Todo 1",
        complete: false,
      },
      {
        id: 2,
        title: "Todo 2",
        complete: false,
      },
    ];

    const reducer = (state, action) => {
      switch (action.type) {
        case "COMPLETE":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
    };

    function Todos() {
      const [todos, dispatch] = useReducer(reducer, initialTodos);

      const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
      };

      return (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Todos />);

&#10147; This is just the logic to keep track of the todo complete status.

&#10147; All of the logic to add, delete, and complete a todo could be contained within a single useReducer Hook by adding more actions.

## useContext with useReducer

&#10148; First, let's imagine a shopping cart application. We will use useReducer to store the products added to the cart and manage the state of the cart. Additionally, we will use useContext to store the user's session status (whether they are logged in or logged out).

- Step 1: First, import useReducer and useContext hooks by creating a container component:

      import { useReducer, useContext } from "react";

- Step 2: Next, let's create a reducer function that will hold a global state and its functions. This state will include the content of our cart and the user's session status.

      const initialState = {
        cart: [],
        user: null,
      };

      const reducer = (state, action) => {
        switch (action.type) {
          case 'ADD_TO_CART':
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          case 'REMOVE_FROM_CART':
            return {
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload.id),
            };
          case 'LOGIN':
            return {
              ...state,
              user: action.payload,
            };
          case 'LOGOUT':
            return {
              ...state,
              user: null,
            };
          default:
            return state;
        }
      };

- Step 3: Now, let's use the useReducer hook to create the state and its functions:

      const [state, dispatch] = useReducer(reducer, initialState);

- Step 4: Additionally, let's create a context where we will store the session status using the useContext hook:

      const UserContext = React.createContext();

- Step 5: Now, let's provide the context with the state we created:

        <UserContext.Provider value={ state}>
          <App />
        </UserContext.Provider>

- Step 6: Finally, in the remaining part of the component, we can use this context. For example, let's create two functions to add and remove products from the cart:

      const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
      };

      const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
      };

- Step 7: Let's also create login and logout functions:

      const login = (user) => {
        dispatch({ type: 'LOGIN', payload: user });
      };

      const logout = () => {
        dispatch({ type: 'LOGOUT' });
      };

&#10148; This way, you can update the cart content and manage the session status by using the ``addToCart``, ``removeFromCart``, ``login``, and ``logout`` functions.

&#10148; By following these steps, we have created a simple shopping cart application using ``useContext`` and ``useReducer``. This provides a useful example for larger and more complex applications.     


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders37/context-app/src/assets/media.gif)
