import Information from "../../components/Information/Information";
import Sellers from "../../components/Seller/Sellers";
import { useState, useEffect } from "react";
import axios from "axios";
import MainProducts from "../../components/MainProducts/MainProducts";
import OurProducts from "../../components/OurProducts/OurProducts";
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import HorizontalShot from "../../components/HorizontalShot/HorizontalShot";
import Paw from "../../components/Paw/Paw";

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <HeroBanner/>
      <MainProducts products={products} />
      <HorizontalShot />
      <OurProducts products={products} />
      <Sellers />
      <Paw/>
      <Information />
    </div>
  );
};

export default HomeView;
