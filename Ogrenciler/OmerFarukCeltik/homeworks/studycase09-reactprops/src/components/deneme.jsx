import React from 'react';
import PropTypes from 'prop-types';

function Deneme({isim,soyisim,yas}) {
  return (
    <div>
      Merhaba {isim} {soyisim}, {yas} yaşındasınız.
    </div>
  )
  
}
Deneme.propTypes = {
  isim : PropTypes.string.isRequired,
  soyisim : PropTypes.string.isRequired,
  yas : PropTypes.number,
};
Deneme.defaultProps = {
  isim: "isim bilgisi eksik.",
  soyisim : "soyisim bilgisi eksik.",
  yas: "yaş bilgisi eksik.",
};

export default Deneme