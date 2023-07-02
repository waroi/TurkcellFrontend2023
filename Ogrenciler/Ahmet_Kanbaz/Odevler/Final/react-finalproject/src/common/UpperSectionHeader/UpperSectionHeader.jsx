import PropTypes from "prop-types";
import { UpperSectionHeaderDiv } from "./UpperStyle";
import Button from "../Button/Button";
import { AiOutlineRight } from "react-icons/ai";
const UpperSectionHeader = ({
  upperTitle,
  upperSubTitleSpan,
  upperSubTitle,
  upperButtonText,
  onClick,
}) => {
  return (
    <UpperSectionHeaderDiv>
      {upperTitle && <span>{upperTitle}</span>}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          {upperSubTitleSpan && (
            <span className="pt-2">{upperSubTitleSpan}</span>
          )}
          <p className="text-capitalize subTitle mb-0">{upperSubTitle}</p>
        </div>
        {upperButtonText && (
          <Button
            className="d-none d-md-flex"
            padding="0.75rem 1.75rem"
            color="#003459"
            backgroundcolor="transparent"
            icon={<AiOutlineRight size="1.25rem" />}
            iconPosition="right"
            fontSize="0.875rem"
            buttonText={upperButtonText}
            onClick={onClick}
          />
        )}
      </div>
    </UpperSectionHeaderDiv>
  );
};

UpperSectionHeader.propTypes = {
  upperTitle: PropTypes.string,
  upperSubTitleSpan: PropTypes.string,
  upperSubTitle: PropTypes.string,
  upperButtonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default UpperSectionHeader;
