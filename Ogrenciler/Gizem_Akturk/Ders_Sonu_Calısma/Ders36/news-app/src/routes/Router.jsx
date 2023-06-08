import HomeView from "../views/HomeView"
import { useRoutes } from "react-router-dom"
// import ParametreView from "../views/ParametreView"
import News from "../components/News"
import SelectedNews from "../views/SelectedNews"



const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
      
        { path: "/news", element: <News /> },
         { path: "/news/:id", element: <SelectedNews /> },
        ])

  return routes;
    

}

export default Router