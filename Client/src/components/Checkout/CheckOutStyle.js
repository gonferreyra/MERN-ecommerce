import styled from "styled-components";

export const CheckoutSection = styled.div`
  background-color: #6e85b7;
`;

export const CheckOutContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  /* background-color: #6e85b7; */
`;
export const CheckOutHeader = styled.div`
  padding: 1rem;
`;
export const HeaderH1 = styled.h1`
  padding: 1rem;
  color: #fff;
  background: #101522;
  border-radius: 5px;
  text-align: center;
`;
export const CheckOutContent = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormData = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  background-color: #fff;
  max-width: 400px;

  @media screen and (min-width: 420px) {
    margin: 1rem auto;
    width: 400px;
  }
`;
export const FormDataHeader = styled.div``;
export const DataH2 = styled.h2`
  margin-bottom: 1rem;
  background-color: #101522;
  color: white;
  padding: 1rem;
  border-radius: 5px;
`;
export const DataInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const DataInput = styled.input`
  height: 25px;
`;
export const DataLabel = styled.label``;

export const OrderData = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  display: inline-block;
  background-color: #fff;
  max-width: 400px;

  @media screen and (min-width: 420px) {
    margin: 1rem auto;
    width: 400px;
  }
`;
export const OrderDataHeader = styled.div``;
export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 0.6fr 0.8fr;
  grid-template-rows: 0.3fr 1.7fr;
  gap: 0px 0px;
  grid-template-areas:
    "ProductHeader QtyHeader SubtotalHeader"
    "Products Qty Subtotal";
  padding: 5px;
`;
export const ProductHeader = styled.div`
  grid-area: ProductHeader;
`;
export const QtyHeader = styled.div`
  grid-area: QtyHeader;
  justify-self: end;
`;
export const SubtotalHeader = styled.div`
  grid-area: SubtotalHeader;
  justify-self: end;
`;
export const SubmitBtn = styled.button`
  margin: 1rem auto;
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: inherit;

  @media screen and (min-width: 420px) {
    width: 400px;
  }
`;
export const BtnContainer = styled.div`
  text-align: center;
`;
