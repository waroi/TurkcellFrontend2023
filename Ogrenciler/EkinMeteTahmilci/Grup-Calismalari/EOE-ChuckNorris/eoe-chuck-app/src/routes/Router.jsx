import React from 'react'
import {useRoutes, Navigate} from "react-router-dom"
import MainView from '../views/MainView'
import RandomJoke from '../components/RandomJoke/RandomJoke'

const Router = () => {
    const router = useRoutes([
        {
            path: "/", element: <MainView/>, children: [{index:true, element: <Navigate to="random"/>},{path: "random", element:<RandomJoke/>}]

        }
    ])

}

export default Router