import React from "react";
import { useDispatch } from "react-redux";
import { adjustQuantity } from "../../../redux/Shopping/shopping-actions";
import {
  ItemsContainer,
  Item,
  ImgContainer,
  Image,
  TextContainer,
  Name,
  QtyContainer,
  Qty,
  PriceContainer,
  Price,
} from "./ItemsStyle";

const Items = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <ItemsContainer>
      <Item>
        <ImgContainer>
          <Image src={require("../../../img/" + item.item.url + ".png")} />
        </ImgContainer>
        <TextContainer>
          <Name>{item.item.name}</Name>
        </TextContainer>
        <QtyContainer>
          <Qty
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(adjustQuantity(item.item.id, e.target.value))
            }
          />
        </QtyContainer>
        <PriceContainer>
          <Price>$ {item.item.price * item.quantity}</Price>
        </PriceContainer>
      </Item>
    </ItemsContainer>
  );
};

export default Items;
