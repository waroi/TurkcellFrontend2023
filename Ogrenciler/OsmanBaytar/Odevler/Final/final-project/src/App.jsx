import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/Router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addLogin } from "./redux/slices/loginSlice";

function App() {
  const dispatch = useDispatch();
  let login = "";
  if (localStorage.getItem("login")) {
    login = JSON.parse(localStorage.getItem("login"));
    dispatch(addLogin(login));
    login = useSelector((state) => state.login.login);
  }

  console.log(login);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
