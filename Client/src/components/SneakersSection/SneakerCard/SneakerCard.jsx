import React from "react";
import {
  Card,
  CardImg,
  SneakerImg,
  CardInfoContainer,
  CardName,
  CardPrice,
  CardHoverContainer,
  CardBtn,
  Btn,
  CardIcons,
  IconBtn,
} from "./SneakerCardStyle";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

const SneakerCard = ({ sneaker }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg>
        <SneakerImg src={sneaker.imgUrl} alt="sneaker-img" />
      </CardImg>
      <CardInfoContainer>
        <CardName>{sneaker.name}</CardName>
        <CardPrice>$ {sneaker.price}</CardPrice>
        <CardHoverContainer>
          <CardBtn>
            <Btn
              id={sneaker._id}
              sneaker={sneaker}
              onClick={() => dispatch(addToCart(sneaker))}
            >
              <BsFillCartCheckFill /> Add to Cart
            </Btn>
          </CardBtn>
          <CardIcons
            to={`/product/${sneaker._id}`}
            onClick={() => dispatch(loadCurrentItem(sneaker))}
          >
            <IconBtn>
              <BsInfoCircle size={20} />
            </IconBtn>
          </CardIcons>
        </CardHoverContainer>
      </CardInfoContainer>
    </Card>
  );
};

export default SneakerCard;
