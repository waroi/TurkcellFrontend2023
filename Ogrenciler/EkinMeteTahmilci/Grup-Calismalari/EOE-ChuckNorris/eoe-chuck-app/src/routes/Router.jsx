import { useRoutes, Navigate } from "react-router-dom"
import MainView from '../views/MainView'
import RandomView from '../views/RandomView'
import SearchView from '../views/SearchView'
import NotFoundView from "../views/NotFoundView"

const Router = () => {
    const routes = useRoutes([
        {
            path: "/", element: <MainView />, children: [
                { index: true, element: <Navigate to="random" /> },
                { path: "random", element: <RandomView /> },
                { path: "search", element: <SearchView /> }
            ]
        },
        {
            path: "*", element: <NotFoundView />
        }
    ])
    return routes;
}

export default Router