import PropTypes from "prop-types";

const Deneme = ({ isim, surname }) => {
  return (
    <div>
      MERHABA {isim} , {surname}
    </div>
  );
};

export default Deneme;

Deneme.PropTypes = {
  isim: PropTypes.string.isRequired,
};
