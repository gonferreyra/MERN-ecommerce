import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CheckOutItems from "./CheckOutItems/CheckOutItems.jsx";
import {
  CheckoutSection,
  CheckOutContainer,
  CheckOutHeader,
  HeaderH1,
  CheckOutContent,
  Form,
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
import {
  addNewOrder,
  getOrders,
} from "../../redux/Shopping/shopping-actions.js";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/Shopping/shopping-actions.js";

const CheckOut = () => {
  const cartState = useSelector((state) => state.shop.cart);
  const authState = useSelector((state) => state.auth);
  const user = authState.uid;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState({
    phone: "",
    shippingAddress: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const { phone, shippingAddress, city, zipCode, country } = orderInfo;

  //Ponerlo en el router, y sacarlo del cart tambien
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

  // Extract id and quantity from products in cart
  const orderItems = cartState.map((item) => {
    return {
      quantity: item.quantity,
      product: item.item._id,
    };
  });

  const newOrder = {
    orderItems,
    user,
    shippingAddress,
    city,
    zipCode,
    country,
    phone,
  };

  const handleNewOrder = async (e) => {
    e.preventDefault();

    // if (orderItems, user, shippingAddress, city, zipCode, country, phone) {
    // if (
    //   orderItems &
    //   user &
    //   (shippingAddress.length >= 6) &
    //   (zipCode.length >= 4) &
    //   (country.length >= 4) &
    //   (phone.length >= 6)
    // ) {
    if (shippingAddress.length <= 4) {
      Swal.fire({
        icon: "error",
        text: "You must enter at least 5 character in the field 'Address'. If the error continues, please contact administrator.",
      });
    } else if (city.length <= 4) {
      Swal.fire({
        icon: "error",
        text: "You must enter at least 5 character in the field 'City'. If the error continues, please contact administrator.",
      });
    } else if (zipCode.length <= 3) {
      Swal.fire({
        icon: "error",
        text: "You must enter at least 4 character in the field 'Zip Code'. If the error continues, please contact administrator.",
      });
    } else if (country.length <= 4) {
      Swal.fire({
        icon: "error",
        text: "You must enter at least 5 character in the field 'Country'. If the error continues, please contact administrator.",
      });
    } else if (phone.length <= 6) {
      Swal.fire({
        icon: "error",
        text: "You must enter at least 7 numbers in the field 'Phone'. If the error continues, please contact administrator.",
      });
    } else {
      await dispatch(addNewOrder(newOrder));
      await dispatch(emptyCart());
      await dispatch(getOrders());
      navigate("/");
    }
  };

  return (
    <CheckoutSection>
      <CheckOutContainer>
        <CheckOutHeader>
          <HeaderH1>Secure Checkout - {authState.name} </HeaderH1>
        </CheckOutHeader>
        <CheckOutContent>
          <Form onSubmit={handleNewOrder}>
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
                    value={phone}
                    onChange={handleInputChange}
                  />
                </InputBoxContainer>
                <InputBoxContainer>
                  <DataLabel>Address</DataLabel>
                  <DataInput
                    type="text"
                    name="shippingAddress"
                    value={shippingAddress}
                    onChange={handleInputChange}
                  />
                </InputBoxContainer>
                <InputBoxContainer>
                  <DataLabel>City</DataLabel>
                  <DataInput
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                  />
                </InputBoxContainer>
                <InputBoxContainer>
                  <DataLabel>ZipCode</DataLabel>
                  <DataInput
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleInputChange}
                  />
                </InputBoxContainer>
                <InputBoxContainer>
                  <DataLabel>Country</DataLabel>
                  <DataInput
                    type="text"
                    name="country"
                    value={country}
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
            <BtnContainer>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </BtnContainer>
          </Form>
        </CheckOutContent>
      </CheckOutContainer>
    </CheckoutSection>
  );
};

export default CheckOut;
