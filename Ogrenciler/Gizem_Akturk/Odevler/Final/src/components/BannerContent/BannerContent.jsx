import ButtonComponent from "../Button/ButtonComponent";

export function BannerContent() {
  return (
    <div className="me-auto c-margin">
      <h2>Welcome to  Commerce</h2>
      <h3>Thousands of Product</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas voluptatem
      </p>
      <div className="row-buttons">
        <ButtonComponent title="More" link="products" outline={true} />
        <ButtonComponent title="Shop" link="products" />
      </div>
    </div>
  );
}
