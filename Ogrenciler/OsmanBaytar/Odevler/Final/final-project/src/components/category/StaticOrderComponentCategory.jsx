import {
  StaticOrderComponentCategoryContainer,
  StaticOrderComponentCategoryHeader,
  StaticOrderComponentCategoryH1,
  StaticOrderComponentCategoryH2,
  StaticOrderComponentCategoryP,
  StaticOrderComponentCategoryButtonDark,
  StaticOrderComponentCategoryButtonLight,
} from "../../styles/StaticOrderComponentCategoryStyle";
import "../../styles/StaticOrderComponentCategory.css";

const StaticOrderComponentCategory = ({ order }) => {
  return (
    <>
      <StaticOrderComponentCategoryContainer className="row">
        <StaticOrderComponentCategoryHeader className="col-lg-6" order={order}>
          <StaticOrderComponentCategoryH1>
            One more friend
          </StaticOrderComponentCategoryH1>
          <StaticOrderComponentCategoryH2>
            Thousands more fun!
          </StaticOrderComponentCategoryH2>
          <StaticOrderComponentCategoryP>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </StaticOrderComponentCategoryP>
          <div className="d-flex flex-row gap-3 mt-5">
            <StaticOrderComponentCategoryButtonDark order={order}>
              Explore Now
            </StaticOrderComponentCategoryButtonDark>
            <StaticOrderComponentCategoryButtonLight>
              View Intro
            </StaticOrderComponentCategoryButtonLight>
          </div>
        </StaticOrderComponentCategoryHeader>
        <div className="col-lg-6">
          <img
            src="../../../public/dogs.png"
            className="img-fluid static-img-category"
          />
        </div>
      </StaticOrderComponentCategoryContainer>
    </>
  );
};

export default StaticOrderComponentCategory;
