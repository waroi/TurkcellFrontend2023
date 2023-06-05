import PropTypes from "prop-types";

const Deneme = ({ isim, surname }) => {
	return (
		<div>
			Merhaba {isim} , {surname}
		</div>
	);
};

export default Deneme;

Deneme.propTypes = {
	isim: PropTypes.string.isRequired,
	surname: PropTypes.number.isRequired,
};
