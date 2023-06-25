import React, { useEffect, useState } from "react";
import Products from "../Components/Products/Products";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";

const HomeView = () => {
  return (
    <div className="bg-body-secondary">
      <Header />
      <div className="container">
        <div>
          <h6>Whats new?</h6>
          <h3>Take a look at some of our products</h3>
          <Products slicedNumber={8} />
          <Link className="btn btn-primary" to={"/products"}>
            View All
          </Link>
        </div>
        <p>cta</p>
        <div>
          <h6>You already know ?</h6>
          <h4>Useful Lorem, ipsum.</h4>
          <div className="row">
            <img
              src="https://picsum.photos/100/50"
              alt=""
              className="rounded mb-2"
            />
            <p className="btn btn-primary w-25 rounded-pill">
              Product knowledge
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              beatae minima sint sapiente suscipit iste dolorum facere commodi.
              Illum, ut.
            </p>
          </div>
          <div className="row">
            <img
              src="https://picsum.photos/100/50"
              alt=""
              className="rounded mb-2"
            />
            <p className="btn btn-primary w-25 rounded-pill">
              Product knowledge
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              beatae minima sint sapiente suscipit iste dolorum facere commodi.
              Illum, ut.
            </p>
          </div>
          <button className="btn border-primary rounded-pill">
            View More &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
