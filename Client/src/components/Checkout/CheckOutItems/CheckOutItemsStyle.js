import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.6fr 0.6fr 0.8fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Products Qty Subtotal";
  /* gap: 10px; */
`;

export const Products = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.7fr 1.3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "ProductImgContainer ProductInfo";
  grid-area: Products;
  padding-left: 5px;
`;
export const ProductImgContainer = styled.div`
  grid-area: ProductImgContainer;
`;
export const ProductInfo = styled.div`
  grid-area: ProductInfo;
`;
export const Qty = styled.div`
  grid-area: Qty;
  justify-self: end;
`;
export const Subtotal = styled.div`
  grid-area: Subtotal;
  justify-self: end;
`;
export const ProductImg = styled.img`
  width: 100%;
`;
