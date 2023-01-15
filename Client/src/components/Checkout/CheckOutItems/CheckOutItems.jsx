import React from "react";
import {
  ItemsContainer,
  Products,
  ProductImgContainer,
  ProductImg,
  ProductInfo,
  Qty,
  Subtotal,
} from "./CheckOutItemsStyle";

const CheckOutItems = ({ item }) => {
  return (
    <ItemsContainer>
      <Products>
        <ProductImgContainer>
          <ProductImg src={item.item.imgUrl} />
        </ProductImgContainer>
        <ProductInfo>{item.item.name}</ProductInfo>
      </Products>
      <Qty>{item.quantity}</Qty>
      <Subtotal>$ {item.item.price * item.quantity}</Subtotal>
    </ItemsContainer>
  );
};

export default CheckOutItems;
