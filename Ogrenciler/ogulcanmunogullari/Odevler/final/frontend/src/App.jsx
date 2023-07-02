import MainPage from './views/mainPage';
import ProductPage from './views/productPage';
import CartPage from './views/cartPage';
import Page404 from './views/page404';
import SigninPage from './views/signinPage';
import SignupPage from './views/signupPage';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CategoryPage from './views/categoryPage';


function App() {
  const [navFooter, setNavFooter] = useState(false);

  const location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    if (path === '/' || path === '/category' || path.startsWith("/product")) {
      setNavFooter(true);
    } else {
      setNavFooter(false);
    }
  }, [location.pathname]);
  document.body.style.backgroundColor = "#FDFDFD"
  return (
    <>
      {navFooter && <Navbar />}
      <Routes>
        <Route>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {navFooter && <Footer />}
    </>
  )
}

export default App
