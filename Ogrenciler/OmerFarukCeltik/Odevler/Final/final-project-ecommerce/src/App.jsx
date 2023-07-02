import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Router from './router/Router'
import { getProducts } from './redux/slices/productSlice';
import {  getUsers } from './redux/slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getCardData, getUserData } from './redux/helpers';
import { getData } from './redux/helpers';
import { useParams } from 'react-router-dom';
import { getCard } from './redux/slices/cardSlice';
function App() {
  const dispatch = useDispatch();
  const [state,setState] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      const usersData = await getUserData();
      const cardData = await getCardData();
      await dispatch(getProducts(data));
      await dispatch(getUsers(usersData));
      await dispatch(getCard(cardData));

      // setState(data)
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
    <Navbar/>
    <Router/>
    <Footer/>
    </>
  )
}

export default App
