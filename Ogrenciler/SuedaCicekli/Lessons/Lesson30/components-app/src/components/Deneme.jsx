import React from 'react';
import  PropTypes  from 'prop-types';

//bunları bir usera atayıp onun içinde de kullanabilirsin
const Deneme = ({name, surname, age}) => {
  return (
    <div>
      Merhaba {name} {surname} {age} yaşındasın
    </div>
  );
};

//yukardaki proptypes ile alakası yok
Deneme.propTypes = {
isim: PropTypes.string.isRequired, //yukarıda import edilen proptypes
surname: PropTypes.string.isRequired,
age: PropTypes.number 
}; 

Deneme.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number
}

Deneme.defaultProps = {
 name: "İsim Yok",
  surname: "Soyisim Yok",
  
};




export default Deneme
