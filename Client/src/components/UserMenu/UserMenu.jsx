import React from "react";
import { useSelector } from "react-redux";
import {
  UserContainer,
  UserH1,
  BtnContainer,
  BackBtn,
} from "./UserMenuStyle.js";

const UserMenu = () => {
  const orders = useSelector((state) => state.shop.orders);
  const authState = useSelector((state) => state.auth);
  const { uid } = authState;

  const userOrders = orders.filter((order) => order.user._id === uid);

  return (
    <UserContainer>
      <UserH1>Welcome {authState.name}</UserH1>
      <BtnContainer>
        {/* <NewItemBtn to="/admin/add">ADD NEW SNEAKER</NewItemBtn> */}
        {/* <OrdersBtn>VIEW ORDERS</OrdersBtn> */}
      </BtnContainer>
      {userOrders.length >= 1 ? (
        <div className="orderContainer">
          <h2>Orders</h2>
          <table className="blueTable">
            <thead>
              <tr>
                <th>Products</th>
                <th>User</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>
                      {order.orderItems.map((item) => (
                        <p
                          style={{
                            margin: "5px 0",
                          }}
                          key={item._id}
                        >
                          - {item.product.name}
                        </p>
                      ))}
                    </td>
                    <td>{order.user.name}</td>
                    <td>$ {order.totalPrice}</td>
                    <td>{order.dateOrdered.slice(0, 10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>
          You haven't made any order. You can start adding products to the cart
          and follow the instructions on checkout.
        </p>
      )}
      <BtnContainer>
        <BackBtn to={"/"}>Go Back</BackBtn>
      </BtnContainer>
    </UserContainer>
  );
};

export default UserMenu;
