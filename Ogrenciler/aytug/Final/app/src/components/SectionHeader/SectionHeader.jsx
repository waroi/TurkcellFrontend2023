import PropTypes from "prop-types";
import * as S from "./SectionHeader.style";
import arrowRightThin from "../../assets/icons/arrow-right-thin.svg";

const SectionHeader = ({ title, subTitle, btnText = "View More", to = "/" }) => {
	return (
		<S.Header>
			<S.HeaderDescription>
				<S.Title>{title}</S.Title>
				<S.SubTitle>{subTitle}</S.SubTitle>
			</S.HeaderDescription>
			<S.SectionButton type="primary" to={to}>
				{btnText} <img src={arrowRightThin} />
			</S.SectionButton>
		</S.Header>
	);
};

SectionHeader.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	btnText: PropTypes.string,
	to: PropTypes.string,
};

export default SectionHeader;
