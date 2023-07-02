import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './redux/store'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <AppRouter />    
      <ToastContainer />
      </Provider>  
  )
}

export default App
