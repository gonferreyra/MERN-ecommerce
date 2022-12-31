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
// import { BiDetail } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

const SneakerCard = ({ sneaker }) => {
  // useDispatch, bring a dispatch from store, import addToCart from actions and pass it along dispatch to onclick function
  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg>
        <SneakerImg src={require("../../../img/" + sneaker.url + ".png")} />
      </CardImg>
      <CardInfoContainer>
        <CardName>{sneaker.name}</CardName>
        <CardPrice>$ {sneaker.price}</CardPrice>
        <CardHoverContainer>
          <CardBtn>
            <Btn
              id={sneaker.id}
              onClick={() => dispatch(addToCart(sneaker.id))}
            >
              <BsFillCartCheckFill /> Add to Cart
            </Btn>
          </CardBtn>
          <CardIcons
            to={`/product/${sneaker.id}`}
            onClick={() => dispatch(loadCurrentItem(sneaker))}
          >
            <IconBtn>
              <BsInfoCircle size={20} />
              {/* <BiDetail size={20} /> */}
            </IconBtn>
          </CardIcons>
        </CardHoverContainer>
      </CardInfoContainer>
    </Card>
  );
};

export default SneakerCard;
