import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/slices/productSlice";
import { setUsers, setUser } from "./redux/slices/userSlice";
import { setCart } from "./redux/slices/cartSlice";
import { Products, Users, Carts } from "./services/api";

function App() {
  const dispatch = useDispatch();
  async function fetchData() {
    await Products.getAll().then((res) => dispatch(setProducts(res)));
    await Users.getAll().then((res) => dispatch(setUsers(res)));
    const user = JSON.parse(localStorage.getItem("user"));
    await Carts.getOne(user?.id).then((res) => dispatch(setCart(res)));

    if (localStorage.getItem("user") !== null) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  }
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
