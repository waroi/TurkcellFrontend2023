/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import "./style.css";

const BlogDetail = ({ newsArr }) => {
  let { id } = useParams();
  return (
    <div className="blogWrap container row p-0 m-0">
      <div className="leftSide  p-2 text-center">
        <img className="w-50 rounded " src={newsArr[id].image} alt="" />
      </div>
      <div className="rightSide  p-2 row mt-4 ">
        <div className="mt-3">
          <h2>{newsArr[id].name}</h2>
          <p className="mt-3">{newsArr[id].description}</p>
        </div>
        <div className="author mt-4">
          <img
            className="authorImg"
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex">
            <h5 className="m-0">EGSS Media</h5>
            <p className="m-0">{newsArr[id].source}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
