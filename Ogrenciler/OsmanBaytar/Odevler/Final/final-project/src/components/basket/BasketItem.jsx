import {
  BasketItemImage,
  BasketItemContainer,
  BasketItemTitle,
  BasketItemP,
  BasketItemButtonRemove,
  BasketItemInput,
  BasketItemSpan,
} from "../../styles/BasketItem";

const BasketItem = (props) => {
  const data = props.data[0];
  console.log(data);
  console.log(data.image);
  return (
    <BasketItemContainer className="row p-3">
      <div className="col-lg-4">
        <BasketItemImage src={data.image} />
      </div>
      <div className="col-lg-8 my-auto">
        <BasketItemTitle>{data.title}</BasketItemTitle>
        <BasketItemP>Price: ${data.price}</BasketItemP>
        <BasketItemP>Category: {data.category}</BasketItemP>
        <BasketItemP>Stock: {data.count}</BasketItemP>
        <div>
          <BasketItemSpan className="me-3">Quantity:</BasketItemSpan>
          <BasketItemInput type="number" min="1" max={data.count} />
        </div>

        <BasketItemButtonRemove>Remove</BasketItemButtonRemove>
      </div>
    </BasketItemContainer>
  );
};

export default BasketItem;
