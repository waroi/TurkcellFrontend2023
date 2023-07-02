import './newsStyle.scss';
import ArrowRight from '../../../assets/icon/arrowRight.png';
import '../../../style/style.scss';

const NewsView = () => {
  return (
    <div className=' ' >
      <div className="container ">
        <div className="d-flex justify-content-between mt-5">
          <div>
            <h4>What are we doing?</h4>
            <h3 className="text-dark fw-bold fs-5">News from us and you</h3>
          </div>
          <button className="btn border-button-bgw d-none d-sm-block">
            View More <img src={ArrowRight} className="arrow-right" alt="" />
          </button>
        </div>
        <div className="row justify-content-between my-3 ">
          <div className="col-lg-4 col-md-6 col-sm-12 card-shadow p-2 rounded-3 mt-3 ">
            <div className="card  border-0">
              <div className="p-2">
                <img
                  className="card-img-top rounded-3"
                  src="https://media.istockphoto.com/id/1472551536/tr/foto%C4%9Fraf/assortment-of-tinned-fish-canned-food-ready-for-date-night.webp?s=170667a&w=0&k=20&c=yeoXSYvhTi35hOHTShq21WC4fpPMOfRc5S7eKYIa01w="
                  alt="Card image cap"
                />
              </div>
              <div className="card-body bg-white">
                <button className='btn btn-primary newsButton m-0'>Let you know!</button>
                <h5 className="card-title mt-3">Shop with Us and Help Stray Animals!</h5>
                <p className="card-text">
                  Every purchase you make on our online store contributes to feeding stray animals. Join us in making a difference!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 card-shadow p-2 rounded-3 mt-3 ">
            <div className="card bg-white border-0">
              <div className="p-2">
                <img
                  className="card-img-top rounded-3"
                  src="https://plus.unsplash.com/premium_photo-1663054884358-972227600e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body bg-white">
                <button className='btn btn-primary newsButton m-0'>Let you know!</button>
                <h5 className="card-title mt-3">Support Animal  with Your Fashion Choices!</h5>
                <p className="card-text">
                  Your fashion choices can make a difference! With each item you buy from our online store, you contribute to helping street animals in need.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 card-shadow p-2 rounded-3 mt-3">
            <div className="card bg-white border-0">
              <div className="p-2">
                <img
                  className="card-img-top rounded-3"
                  src="https://plus.unsplash.com/premium_photo-1663046053787-234752dc87f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body bg-white">
                <button className='btn btn-primary newsButton m-0'>Let you know!</button>
                <h5 className="card-title mt-3">Shop with Us and Make a Difference!</h5>
                <p className="card-text">
                  Make a difference in the lives of street animals by shopping with us. Every purchase you make is a gift to our furry friends in need.
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default NewsView;
