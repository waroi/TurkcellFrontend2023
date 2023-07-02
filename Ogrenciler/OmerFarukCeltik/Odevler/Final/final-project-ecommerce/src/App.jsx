import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Router from './router/Router'
import { getProducts } from './redux/slices/productSlice';
import {  getUsers } from './redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCardData, getUserData } from './redux/helpers';
import { getData } from './redux/helpers';
import { getCard } from './redux/slices/cardSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      const usersData = await getUserData();
      const cardData = await getCardData();
      await dispatch(getProducts(data));
      await dispatch(getUsers(usersData));
      await dispatch(getCard(cardData));
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
