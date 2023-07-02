import { AiOutlineEdit } from "react-icons/ai";
import { styled } from "styled-components";

export function ProductCardImage({ product }) {
  const ProductCardImage = styled.img`
    height: 169px;
    width: 169px;
    max-width: 100%;
    margin: auto 0;
  `;

  return (
    <div>
      <ProductCardImage src={product.image} />
    </div>
  );
}
export function ProductTitle({ product }) {
  const ProductTitle = styled.h5`
    color: #00171f;
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-decoration: none;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  return (
    <div>
      <ProductTitle>{product.title}</ProductTitle>
    </div>
  );
}
export function ProductPrice({ product }) {
  const ProductPrice = styled.p`
    color: #00171f;
    font-size: 16px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  `;

  return (
    <div>
      <ProductPrice>{product?.price} USD</ProductPrice>
    </div>
  );
}
export function ProductAttributeCat() {
  const ProductAttributeCat = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  `;

  return (
    <div>
      <ProductAttributeCat>Category:</ProductAttributeCat>
    </div>
  );
}
export function ProductAttributeRating() {
  const ProductAttributeRating = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  `;

  return (
    <div>
      <ProductAttributeRating>Rating:</ProductAttributeRating>
    </div>
  );
}

export function ProductAttributesRes({ product }) {
  const ProductAttributesRes = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  `;

  return (
    <div>
      <ProductAttributesRes>{product.category}</ProductAttributesRes>
    </div>
  );
}

export function ProductCard({ user }) {
  const ProductCard = styled.div`
    display: inline-flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `;

  return (
    <div>
      <ProductCard>{user && user[0]?.role === "admin" ? "" : ""}</ProductCard>
    </div>
  );
}

export function ProductEditBtn({ product, setEditProduct }) {
  const ProductEditBtn = styled.button`
    cursor: pointer;
    padding: 14px 28px 10px 28px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 57px;
  `;

  return (
    <div>
      <ProductEditBtn
        className="btn mb-2 w-100 textIconLeft btnLarge btn1 rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
        onClick={() => setEditProduct(product)}
      >
        <AiOutlineEdit className="ms-3 me-2 " />
        Edit Product
      </ProductEditBtn>
    </div>
  );
}
