import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import FAQpage from '../components/FAQpage'
import AboutUs from '../components/AboutUs'
import Home from '../components/Home'
import Coins from '../components/Coins'
import CoinDetail from '../components/CoinDetail'
const Router = () => {
  const routes = useRoutes([
    {
      path: `/`, element: <Home />
    },
    {
      path: `/coinpage`,
      element: <Coins />,
    },
    { path: "/coinpage/:id", element: <CoinDetail/>},
    { path: `/aboutus`, element: <AboutUs /> },
    { path: `/faq`, element: <FAQpage /> },

  ])
  return routes
}

export default Router