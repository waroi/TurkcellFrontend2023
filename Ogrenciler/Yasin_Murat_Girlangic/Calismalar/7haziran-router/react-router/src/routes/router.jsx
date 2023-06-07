import { UseRoutes} from 'react-router-dom';
import  HomeView from '../views/HomeView';
import  UserView from '../views/UserView';

const router = () => {
  const routes = useRouter([
        { 
            path: '/',element: <HomeView />
        },
        {
            path: '/user',element: <UserView />
        },
    ]);
    return routes;
}

export default router