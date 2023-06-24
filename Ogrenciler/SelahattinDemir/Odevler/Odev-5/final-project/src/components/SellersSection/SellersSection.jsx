import { TopTitle, Span, Button } from "../NewsSection/NewsSectionStyle";
import ImagesCard from "./ImagesCard";

function SellersSection() {
  return (
    <div className="row">
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <TopTitle>
            Proud to be part of <Span>Pet Sellers</Span>
          </TopTitle>
        </div>
        <Button>
          View all our sellers <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
      <ImagesCard />
    </div>
  );
}

export default SellersSection;
