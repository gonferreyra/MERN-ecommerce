import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { addProduct } from "../../../redux/Products/products-actions";
import {
  AddSection,
  AddContainer,
  FormBox,
  AddForm,
  AddTitle,
  FormItemBox,
  Span,
  Input,
  InputTextArea,
  AddBtn,
  ReturnBtn,
  BtnContainer,
} from "./AddItemStyle";

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addForm, handleInputChange] = useForm({
    name: "",
    category: "",
    price: 0,
    info: "",
    stock: "",
    imgUrl: "",
  });

  const { name, category, price, info, stock, imgUrl } = addForm;

  const newProduct = { name, category, price, info, stock, imgUrl };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    navigate("/admin");
  };

  return (
    <AddSection>
      <AddContainer>
        <FormBox>
          <AddForm onSubmit={handleSubmit}>
            <AddTitle>Add Product</AddTitle>
            <FormItemBox>
              <Span>Name</Span>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Category</Span>
              <Input
                type="text"
                name="category"
                value={category}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Price</Span>
              <Input
                type="number"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Stock</Span>
              <Input
                type="number"
                name="stock"
                value={stock}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Description</Span>
              <InputTextArea
                type="text"
                name="info"
                value={info}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <FormItemBox>
              <Span>Image URL</Span>
              <Input
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleInputChange}
              />
            </FormItemBox>
            <BtnContainer>
              <AddBtn type="submit">Add Product</AddBtn>
              <ReturnBtn to="/admin">Return</ReturnBtn>
            </BtnContainer>
          </AddForm>
        </FormBox>
      </AddContainer>
    </AddSection>
  );
};

export default AddItem;
