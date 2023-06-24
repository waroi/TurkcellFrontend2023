import StaticOrderComponent from "../components/StaticOrderComponent";
import StaticThreeBoxes from "../components/StaticThreeBoxes";

const HomeView = () => {
  return (
    <>
      <StaticOrderComponent source={"../../public/human-dog.png"} order={2} />
      <StaticOrderComponent source={"../../public/human-dog.png"} />
      <StaticThreeBoxes />
    </>
  );
};

export default HomeView;
