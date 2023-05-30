import PropTypes from "prop-types";

const Deneme = ({ isim }) => {
    return <div>Merhaba{isim}</div>
};

Deneme.propTypes = {
    isim: PropTypes.string.isRequired,
};

export default Deneme;