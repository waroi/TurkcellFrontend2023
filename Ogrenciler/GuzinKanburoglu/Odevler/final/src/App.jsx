import './App.css'
import AppRouter from './router/Router'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {
  return (
    <div className='container'>
     <AppRouter/>
    </div>
  )
}

export default App
