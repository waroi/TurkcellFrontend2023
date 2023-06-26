import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/Router";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { userRequest } from "./utils/Request";
// import { addUsers } from "./redux/slices/usersSlice";

function App() {
  // const users = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  // const data = [
  //   {
  //     id: 1,
  //     name: "Osman",
  //     surname: "Baytar",
  //     username: "osmanbaytar",
  //     email: "bosman1997@hotmail.com",
  //     password: "123456Abc",
  //     is_admin: true,
  //   },
  // ];

  // userRequest.post(data).then((data) => {
  //   console.log(data);
  // });

  // function handleAddUsers() {
  //   dispatch(addUsers(data));
  // }

  // useEffect(() => {
  //   handleAddUsers();
  // }, []);

  // console.log(users);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
