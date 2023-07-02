import InformationCard from "../InformationCard/InformationCard";
import InformationStyle from "./InformationStyle";
import ButtonSecondaryStyle from "../ButtonSecondry/ButtonSecondaryStyle";
import Container from "../Container/Container";

const InformationInner = [
  {
    title: "Notable products",
    image:
      "https://cdn-bppmm.nitrocdn.com/QrtjIEWnEaQbiTNjHfaQDCEuTMSMqqIO/assets/desktop/optimized/rev-48597dd/wp-content/66334c5c7b7a4bc00ca0d460c0166923.webpc-passthru.php",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime minus natus cumque, molestias placeat eius, temporibus, dolorem vitae provident non velit quam quod corporis dicta veritatis! ",
    tag: "Wardrobe Knowledge",
  },
  {
    title: "Complete Summer Outfits",
    image:
      "https://i.pinimg.com/564x/53/a2/95/53a29540f1d8a1cdc2673fea4007aa3e.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime minus natus cumque, molestias placeat eius, temporibus, dolorem vitae provident non velit quam quod corporis dicta veritatis! ",
    tag: "Jewelery Knowledge",
  },
  {
    title: "Best Sellers of the Year",
    image:
      "https://i.pinimg.com/564x/e7/9f/97/e79f97b32a9e63bc1a6b688173f8c3f9.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime minus natus cumque, molestias placeat eius, temporibus, dolorem vitae provident non velit quam quod corporis dicta veritatis!",
    tag: "Electronics Knowledge",
  },
];

const renderInformationCards = (InformationInner) =>
  InformationInner.map((InformationInnerIn, i) => (
    <InformationCard key={i} inner={InformationInnerIn} />
  ));

const Information = () => {
  return (
    <Container>
      <InformationStyle className=" ">
        <div className="header">
          <div>
            <h4>You already know ?</h4>
            <h3>Useful Information</h3>
          </div>
          <ButtonSecondaryStyle className="button">
            View More
          </ButtonSecondaryStyle>
        </div>
        <div className="row wrapper d-sm-flex">
          {renderInformationCards(InformationInner)}
        </div>
        <div className="btn w-100  my-3">
          <ButtonSecondaryStyle className="w-75 justify-content-center  ">
            View More
          </ButtonSecondaryStyle>
        </div>
      </InformationStyle>
    </Container>
  );
};

export default Information;
