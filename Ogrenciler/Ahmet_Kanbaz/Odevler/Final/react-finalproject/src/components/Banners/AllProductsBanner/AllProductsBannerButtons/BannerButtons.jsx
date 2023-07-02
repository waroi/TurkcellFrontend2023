import Button from "../../../../common/Button/Button";
import {AiOutlinePlayCircle} from "react-icons/ai";
const BannerButtons = () => {
  return (
    <div>
      <div className="d-flex d-lg-none gap-3 justify-content-lg-end">
        <Button
          icon={<AiOutlinePlayCircle size="1.5rem" />}
          iconPosition="right"
          padding="0.625rem 1.75rem"
          buttonText="View Intro"
          color="#003459"
          backgroundcolor="transparent"
        />
        <Button
          padding="0.625rem 1.75rem"
          buttonText="Explore Now"
          color="#FDFDFD"
          backgroundcolor="#003459"
        />
      </div>
      <div className="d-none d-lg-flex gap-3 justify-content-lg-end">
      <Button
          icon={<AiOutlinePlayCircle size="1.5rem" />}
          iconPosition="right"
          padding="0.625rem 1.75rem"
          buttonText="View Intro"
          color="#FDFDFD"
          backgroundcolor="transparent"
          className="border border-2 border-white"
        />
        <Button
          padding="0.625rem 1.75rem"
          buttonText="Explore Now"
          color="#003459"
          backgroundcolor="#FDFDFD"
        />
      </div>
    </div>
  );
};

export default BannerButtons;
