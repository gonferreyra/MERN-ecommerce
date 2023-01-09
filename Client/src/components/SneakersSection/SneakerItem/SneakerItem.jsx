import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";
import { UserContext } from "../../Context/UserContext";

import {
  ItemContainer,
  GridContainer,
  ImgContainer,
  ItemImg,
  Content,
  ContentName,
  ContentPrice,
  ContentInfo,
  ContentBtn,
  BackBtnContainer,
  BackBtn,
} from "./SneakerItemStyle";

const SneakerItem = () => {
  // we bring from STORE currentItem, that already has stored the full item that we selected on sneakercard component
  const item = useSelector((state) => state.shop.currentItem);
  // console.log(item);

  const { cartIsOpen } = useContext(UserContext);

  const dispatch = useDispatch();

  return (
    <ItemContainer cartIsOpen={cartIsOpen}>
      <GridContainer>
        <ImgContainer>
          <ItemImg src={item.imgUrl} />
        </ImgContainer>
        <Content>
          <ContentName>{item.name}</ContentName>
          <ContentPrice>{item.price}</ContentPrice>
          <ContentInfo>{item.info}</ContentInfo>
          <ContentBtn onClick={() => dispatch(addToCart(item))}>
            Add To Cart
          </ContentBtn>
        </Content>
        <BackBtnContainer>
          <BackBtn to="/#sneakerSection">Go Back</BackBtn>
        </BackBtnContainer>
      </GridContainer>
    </ItemContainer>
  );
};

export default SneakerItem;
