import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProductAction } from "../../../redux/Products/products-actions";
import {
  EditSection,
  EditContainer,
  FormBox,
  EditForm,
  EditTitle,
  FormItemBox,
  Span,
  Input,
  InputTextArea,
  EditBtn,
  ReturnBtn,
  BtnContainer,
} from "./ItemStyle";

const Item = () => {
  const item = useSelector((state) => state.products.currentItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id } = item;

  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price);
  const [info, setInfo] = useState(item.info);
  // const [imgUrl, setImgUrl] = useState(item.imgUrl);
  // console.log(name, category, price, info);

  const updatedProduct = { _id, name, category, price, info };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(updatedProduct));
    navigate("/admin");
  };

  return (
    <EditSection>
      <EditContainer>
        <FormBox>
          <EditForm onSubmit={handleSubmit}>
            <EditTitle>Edit Product</EditTitle>
            <FormItemBox>
              <Span>Name</Span>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Category</Span>
              <Input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Price</Span>
              <Input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Description</Span>
              <InputTextArea
                type="text"
                name="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Image URL</Span>
              <Input />
            </FormItemBox>
            <BtnContainer>
              <EditBtn type="submit">Save Changes</EditBtn>
              <ReturnBtn to="/admin">Return</ReturnBtn>
            </BtnContainer>
          </EditForm>
        </FormBox>
      </EditContainer>
    </EditSection>
  );
};

export default Item;
