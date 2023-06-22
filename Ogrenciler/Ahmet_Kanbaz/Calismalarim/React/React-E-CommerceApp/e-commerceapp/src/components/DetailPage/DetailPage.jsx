import {getDetailProduct4API} from '../../services/api'
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Loading from '../../common/Loading/Loading';
import Error from '../../common/Error/Error';
const DetailPage = () => {

  const reduxDetailProduct = useSelector((state) => state.detailProduct)
  const {id} = useParams()
  console.log(reduxDetailProduct)
  
  useEffect(() => {
    getDetailProduct4API(id)
  }, [id])
  
  const detailProductValues = reduxDetailProduct.detailProduct != '' && reduxDetailProduct.detailProduct.data;
  const detailProductAttributes = {
    imageUrl: detailProductValues.attributes['image-urls'][0],
    name: detailProductValues.attributes['name'],
    description: detailProductValues.attributes['description'],
    brandName: detailProductValues.attributes['brand-name']
  }

  if(reduxDetailProduct.loading == true) {
    return <Loading />
  }

  if(reduxDetailProduct.error != null) {
    return <Error reduxValues={reduxDetailProduct} />
  }

  return (
    <div className="container py-5">
      <div className="row pt-4 align-items-center">
        <div className="col-lg-4">
          <img src={detailProductAttributes.imageUrl} alt="" className="img-fluid w-100" />
        </div>
        <div className="col-lg-8">
        <h3 className="text-center pb-4">{detailProductAttributes.name}</h3>
          <p>{detailProductAttributes.description}</p>
          <div className="d-flex justify-content-around py-4">
            <span>Kategori</span>
            <span>Tarih</span>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger">Ürüne Git</button>
          </div>
        </div>
      </div>

      <h4 className="text-center pt-4">{detailProductAttributes.brandName} Markasındaki Diğer Ürünler</h4>
      <div className="row py-4">
        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Tişört</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <div className="d-flex justify-content-center">
                <span>Kategori</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Tişört</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <div className="d-flex justify-content-center">
                <span>Kategori</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Tişört</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <div className="d-flex justify-content-center">
                <span>Kategori</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
