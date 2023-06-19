[Turn Back](../../../)

<h1 align="center">Ders38 - React Redux</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://stickykart.com/wp-content/uploads/2020/11/redux-450x450.png" alt="react" width="35" height="35"/> </a> </p>

# React Introduction

## React Redux

### Redux

&#10145; React Redux is a state management library for React.

&#10145; It is a wrapper around Redux that makes it easier to use in React.

&#10145; It provides a way to manage state in a React application.

&#10145; Redux, on the other hand, keeps the application state in a central place and tracks how it changes.

&#10145; Redux manages application state using an object called "store". The state is kept in the Redux store, which is accessible to all components.

&#10145; This makes it easy for components to share and update the state.

### React Redux

&#10145; React Redux is used to establish the connection between Redux store and React components, allowing React components to access and update the state stored in Redux. 

&#10145; This connection is facilitated through React Redux hooks such as ``useSelector`` and ``useDispatch``. ``useSelector`` is used to select the state from the store, while ``useDispatch ``is used to trigger Redux actions.

&#10145; React Redux also provides a ``Provider`` component that makes the Redux store available to all components in the application.

&#10145; In other words, React Redux enables React components to "subscribe" to specific parts of the Redux store and receive updates whenever the subscribed state changes. It provides a way for components to access the global state managed by Redux without having to pass props down through multiple layers of components.

&#10145; The ``useSelector`` hook takes a selector function as an argument, which allows you to extract and return the desired state from the Redux store. The selector function receives the entire state as its argument, and you can use it to extract the specific state properties you need for a component. Whenever the selected state value changes, the component will be re-rendered.

&#10145; On the other hand, the ``useDispatch`` hook provides a reference to the dispatch function from the Redux store. This allows you to dispatch actions to modify the state in the store. Actions are objects that describe the type of change you want to make to the state. By calling the dispatch function with an action, Redux will handle the action and update the state accordingly.

&#10145; By using these React Redux hooks, you can seamlessly integrate Redux into your React components, accessing and updating the state from the Redux store as needed. This helps to keep your application's state management organized and scalable.

## Example

&#10146; In this example, we'll use Redux to create actions that increment or decrement the counter value, and store that value in the Redux store.

1. First, create a ``store.js`` file and paste the following code inside:

        import { configureStore } from '@reduxjs/toolkit';
        import counterReducer from './slices/counterSlice';

        const store = configureStore({
          reducer: {
            counter: counterReducer,
          },
        });

        export default store;

&#10146; In this file, we configure the Redux store using the ``configureStore`` function. We define the counterReducer under the ``reducer`` object. This will be the slice reducer that we will create in the ``counterSlice.js`` file.

2. Next, create a ``counterSlice.js`` file and paste the following code inside:

        import { createSlice } from '@reduxjs/toolkit';

        export const counterSlice = createSlice({
          name: 'counter',
          initialState: 0,
          reducers: {
            increment: (state) =>
              state += 1,
            decrement: (state) => 
              state -= 1,
          },
        });

        export const { increment, decrement } = counterSlice.actions;

        export default counterSlice.reducer;

&#10146; In this file, we use the ``createSlice`` function to create a slice. A slice represents a piece of state to be stored in the Redux store and the actions that can modify that state.

&#10146; The ``name`` field specifies the name of the slice. The ``initialState`` field specifies the initial value of the counter, which is set to 0 in this example.

&#10146; The ``reducers ``field defines the actions for the slice. We define two actions: ``increment`` and ``decrement``. These actions are used to increment and decrement the counter value, respectively.

&#10146; The ``counterSlice.actions`` statement allows us to export the defined actions. The ``counterSlice.reducer`` statement exports the slice reducer, which updates the state stored in the Redux store.

3. Now, we can create a component that controls the value of the counter using Redux. For example, create a ``Counter.js ``file and paste the following code inside:

       import React from 'react';
       import { useSelector, useDispatch } from 'react-redux';
       import { increment, decrement } from './redux/slices/counterSlice';

       function Counter() {
        const counter = useSelector((state) => state.counter);
        const dispatch = useDispatch();

        const handleIncrement = () => {
          dispatch(increment());
        };

        const handleDecrement = () => {
          dispatch(decrement());
        };

        return (
          <div>
            <h1>Counter</h1>
            <p>Count: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
          );
        }

       export default Counter;

&#10146; In this component, we use the ``useSelector`` and ``useDispatch`` hooks to access the Redux store and trigger actions. The ``counter`` variable retrieves the counter value from the Redux store. The`` dispatch`` variable is used to trigger actions.

&#10146; The ``handleIncrement`` function dispatches the ``increment`` action when the Increment button is clicked. Similarly, the ``handleDecrement`` function dispatches the ``decrement`` action when the Decrement button is clicked.

&#10146; In the render function, we display the counter value and two buttons. When the buttons are clicked, the respective actions are triggered, updating the Redux store.

4. Finally, you can use this ``Counter`` component in a parent component. For example, update the ``App.js`` file as follows:

        import React from 'react';
        import Counter from './Counter';

        function App() {
          return (
            <div>
              <h1>React Redux Counter App</h1>
              <Counter />
            </div>
          );
        }

        export default App;

&#10146; This way, you can create a React application that controls a simple counter using Redux. The ``Counter ``component accesses the Redux store to read the counter value and triggers actions to update the counter value. This example showcases how Redux facilitates centralized state management and simplifies state sharing among components in a React application.
     


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders38/redux-app/src/assets/media.gif)
