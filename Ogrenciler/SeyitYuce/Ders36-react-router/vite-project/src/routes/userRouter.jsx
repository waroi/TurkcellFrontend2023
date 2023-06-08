import { useRoutes } from "react-router-dom";
import UserView from "../views/UserView";
import ParameterView from "../views/ParameterView";

const userRouter = () => {
 const routes = useRoutes([
    {
        path: "/user",
        element: <UserView/>
    }
 ])
};

export default userRouter;
