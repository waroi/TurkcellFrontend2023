import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView"
import CategoryView from "../views/CategoryView"
import NewsDetail from "../views/NewsDetail"

const Router = () => {
const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/:category", element: <CategoryView/>},
    { path: "/newsDetail/:id", element: <NewsDetail/>}
])
return routes;
}

export default Router