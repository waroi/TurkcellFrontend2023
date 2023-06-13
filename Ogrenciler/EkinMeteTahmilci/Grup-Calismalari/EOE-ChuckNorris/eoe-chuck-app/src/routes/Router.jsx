import React from 'react'
import {useRoutes, Navigate} from "react-router-dom"
import MainView from '../views/MainView'
import RandomJoke from '../components/RandomJoke/RandomJoke'

const Router = () => {
    const routes = useRoutes([
        {
            path: "/", element: <MainView/>, children: [
                {index:true, element: <Navigate to="random"/>},
                {path: "random", element:<RandomJoke/>}
            ]

        }
    ])
    return routes;
}

export default Router