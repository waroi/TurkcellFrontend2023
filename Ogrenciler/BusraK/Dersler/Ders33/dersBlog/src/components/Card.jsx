import React from "react";

const Card = ({ title, body, url }) => {
  return (
    <div className="card col-3  m-auto  shadow bg-body-tertiary rounded ">
      <img src={url} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
