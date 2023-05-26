import React from "react";
import propTypes from "prop-types";

function Deneme({isim, soyisim, yas}) {
    return (
      <div className="Deneme">
        <h1>{isim} {soyisim}</h1>
        <h2>{yas}</h2>
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
  