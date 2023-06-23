import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
