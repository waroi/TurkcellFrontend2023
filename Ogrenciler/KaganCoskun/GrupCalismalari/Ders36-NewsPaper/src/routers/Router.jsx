import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView"
// import CategoryView from "../views/CategoryView"
import NewsDetail from "../views/NewsDetail"

const Router = ({news}) => {
const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/:category", element: <HomeView/>},
    { path: "/newsDetail/:id", element: <NewsDetail news={news}/>}
])
return routes;
}

export default Router