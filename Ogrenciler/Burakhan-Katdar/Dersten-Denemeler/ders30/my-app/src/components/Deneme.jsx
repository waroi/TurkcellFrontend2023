import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from "prop-types";


function Deneme({isim, soyisim, yas, kisiBilgi}) {
    return (
      <div className="Deneme">
        <h1>{isim} {soyisim}</h1>
        <h2>{yas}</h2>
        <p className="text-danger">{kisiBilgi}</p>
      </div>
    );
    
  }

  Deneme.propTypes = {
    isim: propTypes.string.isRequired,
    soyisim: propTypes.string.isRequired,
    yas: propTypes.number.isRequired
  }

  Deneme.defaultProps = {
    isim: "NullName",
    soyisim: "NullSurname",
    yas: "NullAge"
  }


  
  export default Deneme;
  