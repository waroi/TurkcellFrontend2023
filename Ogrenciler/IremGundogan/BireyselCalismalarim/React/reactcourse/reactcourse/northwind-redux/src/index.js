import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css'
import {Provider} from "react-redux"
import configureStore from "./redux/reducers/configureStore"
import {BrowserRouter} from "react-router-dom"

const store = configureStore();
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
