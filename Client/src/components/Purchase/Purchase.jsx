import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
import {
  ExitSection,
  ItemsContainer,
  TitleHead,
  HeadImg,
  HeadName,
  HeadQty,
  HeadPrice,
  PaymentContainer,
  PaymentContainerBox,
  ButtonCash,
  ButtonCreditCard,
  ButtonPaypal,
  TotalContainer,
  TotalContainerBox,
  Total,
  Span,
  Confirm,
} from "./PurchaseStyle";
import Items from "./Items/Items";
import Swal from "sweetalert2";
import { emptyCart } from "../../redux/Shopping/shopping-actions";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const cart = useSelector((state) => state.shop.cart);
  // console.log(cart);

  // Update total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  const dispatch = useDispatch();

  // button
  const [disabled, setDisabled] = useState(true);

  const handlerDisabledButton = () => {
    setTimeout(() => {
      setDisabled(true);
    }, 100);
  };

  const navigate = useNavigate();
  const purchaseComplete = async () => {
    try {
      await Swal.fire({
        title: "Payment complete",
        text: "Thanks for your buy. Hope to see you again soon.",
        icon: "success",
        timer: 3000,
      });
      await dispatch(emptyCart());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ExitSection>
      <ItemsContainer>
        <TitleHead>
          <HeadImg></HeadImg>
          <HeadName>Name</HeadName>
          <HeadQty>qty</HeadQty>
          <HeadPrice>price</HeadPrice>
        </TitleHead>
        {cart.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </ItemsContainer>
      <TotalContainer>
        <TotalContainerBox>
          <Total>${totalPrice}</Total>
          <Span>Total</Span>
        </TotalContainerBox>
      </TotalContainer>
      <PaymentContainer>
        <PaymentContainerBox>
          <ButtonCash
            onBlur={handlerDisabledButton}
            onFocus={() => setDisabled(false)}
          >
            Cash
          </ButtonCash>
          <ButtonCreditCard disabled={true}>CreditCard</ButtonCreditCard>
          <ButtonPaypal>Paypal</ButtonPaypal>
        </PaymentContainerBox>
      </PaymentContainer>
      <Confirm disabled={disabled} onClick={purchaseComplete}>
        Confirm
      </Confirm>
    </ExitSection>
  );
};

export default Purchase;
