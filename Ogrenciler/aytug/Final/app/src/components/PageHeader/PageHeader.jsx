import Section from "../Section/Section";
import * as S from "./PageHeader.style";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
	return (
		<Section>
			<S.PageTitle>{title} Page</S.PageTitle>
		</Section>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageHeader;
