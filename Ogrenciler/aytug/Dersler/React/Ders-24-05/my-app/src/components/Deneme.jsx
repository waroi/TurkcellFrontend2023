import React from "react";
import { PropTypes } from "prop-types";

const Deneme = ({ name, surName, age }) => {
	return (
		<div>
			<p>
				Merhaba {name} {surName}, {age} yıldır ayaktasın🎉
			</p>
		</div>
	);
};

export default Deneme;

Deneme.propTypes = {
	name: PropTypes.string.isRequired,
	surName: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};

Deneme.defaultProps = {
	name: "İsim girilmedi",
	surName: "Soyisim girilmedi",
	age: "Yaş girilmedi",
};
