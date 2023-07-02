import * as S from "./Section.style";
import PropTypes from "prop-types";

const Section = ({ children, height }) => {
	return (
		<S.SectionStyled height={height}>
			<div className="container">{children}</div>
		</S.SectionStyled>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	height: PropTypes.string,
};

export default Section;
