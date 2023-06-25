import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailCard from "../components/Card/DetailCard";
import MoreProductsSection from "../components/MoreProductsSection/MoreProductsSection";

const DetailView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3004/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(product);
  return (
    <div className="container">
      <DetailCard data={product} />
      <MoreProductsSection id={id} />
    </div>
  );
};

export default DetailView;
