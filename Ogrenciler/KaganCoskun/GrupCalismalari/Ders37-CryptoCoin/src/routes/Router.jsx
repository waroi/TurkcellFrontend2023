import { useRoutes } from "react-router-dom"
import HomeView from "../Views/HomeView"
import DetailView from "../Views/DetailView";

const Router = () => {
const routes = useRoutes([

{path: '/', element: <HomeView />},
{path: '/coin/:id', element: <DetailView />}
])
return routes;
}

export default Router