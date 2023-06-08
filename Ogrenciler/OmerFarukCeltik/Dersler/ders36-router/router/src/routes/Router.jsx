import React from 'react'
import {useRoutes} from "react-router-dom"
import HomeView from '../view/HomeView'
// import UserView from '../view/UserView'
import userRoute from './userRouter'
import PArametreView from '../view/PArametreView'
const Router = () => {
  const routes = useRoutes([
{path:"/", element: <HomeView/>},
userRoute,
{path:"/parametre/:id", element: <PArametreView/>},

])
  return routes;
}

export default Router