/* eslint-disable react/prop-types */

import '../../../style/style.scss';
import ArrowRight from '../../../assets/icon/arrowRight.png';
import './cardLookStyle.scss'
import FirstCard from "../../../components/firstCard/firstCard"

const CardLookView = ({ products }) => {
  console.log(products);
  const firstEightProducts = products.slice(0, 8);
  return (
    <div className='my-5 bg-fdfd'>
      <div className="container">
        <div className='d-flex justify-content-between'>
          <div>
            <h4>Whats new?</h4>
            <h3 className='text-dark fw-bold fs-5'>Take a Look at Some Of Our Clothes</h3>
          </div>
          <button className="btn border-button-bgw d-none d-sm-block ">View More <img src={ArrowRight} className="arrow-right" alt="" /></button>
        </div>
        <div className='mt-5 row'>
          {/* İlk 8 ürünü temsil eden kartları oluşturun */}

          <FirstCard products={firstEightProducts} col={3} />

        </div>
      </div>
    </div>
  );
};

export default CardLookView;
