import { useRoutes } from 'react-router-dom'
import MainPage from '../views/MainPage'
import InfoPage from '../views/InfoPage'

export const Router = () => {

 return useRoutes([
  {
   path: "/", element: <MainPage />,
  },
  { path: "/:id", element: <InfoPage /> },
 ]);

}
