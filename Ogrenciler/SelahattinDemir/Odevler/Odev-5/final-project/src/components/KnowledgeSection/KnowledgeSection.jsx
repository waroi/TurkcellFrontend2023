import { Button, BottomTitle, TopTitle } from "../NewsSection/NewsSectionStyle";
import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardButton,
  Title,
  Description,
} from "./KnowledgeSectionStyle";

function KnowledgeSection() {
  return (
    <div className="row">
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <TopTitle>You already know ?</TopTitle>
          <BottomTitle>Useful pet knowledge</BottomTitle>
        </div>
        <Button>
          View more <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
      <CardContainer className="col-md-6 col-lg-4">
        <div className="card ms-2 border-0">
          <CardImageContainer>
            <CardImage
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              className="card-img-top"
              alt="..."
            />
          </CardImageContainer>
          <div className="card-body">
            <CardButton>Pet knowledge</CardButton>
            <Title className="card-title">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </Title>
            <Description className="card-text">
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets. Not only that, the small, lovely,
              smart, friendly, and skillful circus dog breed.
            </Description>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="col-md-6 col-lg-4">
        <div className="card ms-2 border-0">
          <CardImageContainer>
            <CardImage
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              className="card-img-top"
              alt="..."
            />
          </CardImageContainer>
          <div className="card-body">
            <CardButton>Pet knowledge</CardButton>
            <Title className="card-title">Dog Diet You Need To Know</Title>
            <Description className="card-text">
              Dividing a dogs diet may seem simple at first, but there are some
              rules you should know so that your dog can easily absorb the
              nutrients in the diet. For those who are just starting to raise
              dogs, especially newborn puppies with relatively weak resistance.
            </Description>
          </div>
        </div>
      </CardContainer>
      <CardContainer className="col-md-6 col-lg-4">
        <div className="card ms-2 border-0">
          <CardImageContainer>
            <CardImage
              src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
              className="card-img-top img-fluid"
              alt="..."
            />
          </CardImageContainer>
          <div className="card-body">
            <CardButton>Pet knowledge</CardButton>
            <Title className="card-title">
              Why Dogs Bite and Destroy Furniture and How to Prevent It
              Effectively
            </Title>
            <Description className="card-text">
              Dog bites are common during development. However, no one wants to
              see their furniture or important items being bitten by a dog.
            </Description>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

export default KnowledgeSection;
