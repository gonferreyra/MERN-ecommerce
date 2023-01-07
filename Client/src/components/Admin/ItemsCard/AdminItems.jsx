import React from "react";
import {
  Card,
  CardImg,
  SneakerImg,
  CardInfoContainer,
  CardName,
  CardPrice,
  CardBtnContainer,
  CardBtn,
  Btn,
} from "./AdminItemsStyle";
// import { BsFillCartCheckFill } from "react-icons/bs";
// import { BsInfoCircle } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { loadCurrentItem } from "../../../redux/Products/products-actions";
import { useDispatch } from "react-redux";

const AdminItems = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardImg>
        <SneakerImg
          src={require("../../../img/" + product.imgUrl + ".png")}
          alt="sneaker-img"
        />
      </CardImg>
      <CardInfoContainer>
        <CardName>{product.name}</CardName>
        <CardPrice>$ {product.price}</CardPrice>
        <CardBtnContainer>
          <CardBtn>
            <Btn
              to={`/admin/${product._id}`}
              id={product._id}
              sneaker={product}
              onClick={() => dispatch(loadCurrentItem(product))}
            >
              <AiFillEdit /> Edit
            </Btn>
          </CardBtn>
        </CardBtnContainer>
      </CardInfoContainer>
    </Card>
  );
};

export default AdminItems;
