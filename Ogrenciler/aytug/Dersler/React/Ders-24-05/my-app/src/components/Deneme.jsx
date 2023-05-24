import React from "react";
import { PropTypes } from "prop-types";

const Deneme = ({ name, surName, age }) => {
	return (
		<div>
			Merhaba {name} {surName}, {age} yaşındasın
		</div>
	);
};

export default Deneme;
Deneme.propTypes = {
	name: PropTypes.string.isRequired,
	surName: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};
