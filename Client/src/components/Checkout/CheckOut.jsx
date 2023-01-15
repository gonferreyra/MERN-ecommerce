import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems/CheckOutItems.jsx";
import {
  CheckoutSection,
  CheckOutContainer,
  CheckOutHeader,
  HeaderH1,
  CheckOutContent,
  FormData,
  FormDataHeader,
  DataH2,
  DataInputContainer,
  InputBoxContainer,
  DataLabel,
  DataInput,
  OrderData,
  OrderDataHeader,
  ProductsListContainer,
  ProductHeader,
  QtyHeader,
  SubtotalHeader,
  BtnContainer,
  SubmitBtn,
} from "./CheckOutStyle.js";

const CheckOut = () => {
  const cartState = useSelector((state) => state.shop.cart);
  const authState = useSelector((state) => state.auth);
  const [total, setTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState({
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    let total = 0;
    cartState.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotal(total);
  }, [cartState, total, setTotal]);

  const handleInputChange = ({ target }) => {
    setOrderInfo({
      ...orderInfo,
      [target.name]: target.value,
    });
  };

  // const placeNewOrder = (e) => {
  //   e.preventDefault();
  // };

  return (
    <CheckoutSection>
      <CheckOutContainer>
        <CheckOutHeader>
          <HeaderH1>Secure Checkout - username </HeaderH1>
        </CheckOutHeader>
        <CheckOutContent>
          <FormData>
            <FormDataHeader>
              <DataH2>1 - Shipping Address</DataH2>
            </FormDataHeader>
            <DataInputContainer>
              <InputBoxContainer>
                <DataLabel>Phone</DataLabel>
                <DataInput
                  type="number"
                  name="phone"
                  value={orderInfo.phone}
                  onChange={handleInputChange}
                />
              </InputBoxContainer>
              <InputBoxContainer>
                <DataLabel>Address</DataLabel>
                <DataInput
                  type="text"
                  name="address"
                  value={orderInfo.address}
                  onChange={handleInputChange}
                />
              </InputBoxContainer>
              <InputBoxContainer>
                <DataLabel>City</DataLabel>
                <DataInput
                  type="text"
                  name="city"
                  value={orderInfo.city}
                  onChange={handleInputChange}
                />
              </InputBoxContainer>
              <InputBoxContainer>
                <DataLabel>ZipCode</DataLabel>
                <DataInput
                  type="text"
                  name="zipCode"
                  value={orderInfo.zipCode}
                  onChange={handleInputChange}
                />
              </InputBoxContainer>
              <InputBoxContainer>
                <DataLabel>Country</DataLabel>
                <DataInput
                  type="text"
                  name="country"
                  value={orderInfo.country}
                  onChange={handleInputChange}
                />
              </InputBoxContainer>
            </DataInputContainer>
          </FormData>
          <OrderData>
            <OrderDataHeader>
              <DataH2>3 - Order Options</DataH2>
            </OrderDataHeader>
            <ProductsListContainer>
              <ProductHeader>
                <p>Products</p>
              </ProductHeader>
              <QtyHeader>
                <p>Qty</p>
              </QtyHeader>
              <SubtotalHeader>
                <p>Subtotal</p>
              </SubtotalHeader>
            </ProductsListContainer>
            {cartState.map((item) => (
              <CheckOutItems key={item.item._id} item={item} />
            ))}
            <div
              style={{
                float: "Right",
              }}
            >
              Total: $ {total}
            </div>
          </OrderData>
        </CheckOutContent>
        <BtnContainer>
          <SubmitBtn>Submit</SubmitBtn>
        </BtnContainer>
      </CheckOutContainer>
    </CheckoutSection>
  );
};

export default CheckOut;
