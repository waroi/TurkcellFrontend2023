import React from 'react'
import {useRoutes, Navigate} from "react-router-dom"
import HomeView from '../view/HomeView'
// import UserView from '../view/UserView'
import userRoute from './userRouter'
import PArametreView from '../view/PArametreView'
import NewView from '../view/NewView'
import SportNewView from '../view/SportNewView'
import EconomyNewView from '../view/EconomyNewView'
const Router = () => {
  const routes = useRoutes([
{path:"/", element: <HomeView/>},
userRoute,
{path:"/parametre/:id", element: <PArametreView/>},
{path:"/haberler", element: <NewView/>, children:[
  // base bir sayfa oluşturmak için navigate ve index kullandık
  {index: true, element: <Navigate to="spor"/>},
  {path:"spor", element: <SportNewView/>},
  {path:"ekonomi", element: <EconomyNewView/>}
]},

])
  return routes;
}

export default Router