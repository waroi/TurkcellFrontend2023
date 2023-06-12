import React from "react";
import { PropTypes } from "prop-types";

const ListItem = ({ langs }) => {
	console.log(langs);
	return <li>{langs}</li>;
};

ListItem.propTypes = {
	langs: PropTypes.string.isRequired,
};

export default ListItem;
