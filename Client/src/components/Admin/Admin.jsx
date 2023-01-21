import React from "react";
import { useSelector } from "react-redux";
import AdminItems from "./ItemsCard/AdminItems.jsx";
import {
  AdminContainer,
  AdminH1,
  BtnContainer,
  NewItemBtn,
  OrdersBtn,
  ItemsContainer,
} from "./AdminStyle.js";
import { useState } from "react";
// import "./style.css";

const Admin = () => {
  const products = useSelector((state) => state.products.products);
  const ordersState = useSelector((state) => state.shop.orders);
  const [orders, setOrders] = useState(false);
  // console.log(ordersState);

  return (
    <AdminContainer>
      <AdminH1>ADMIN MENU</AdminH1>
      <BtnContainer>
        <NewItemBtn to="/admin/add">ADD NEW SNEAKER</NewItemBtn>
        <OrdersBtn
          onClick={() => {
            setOrders(!orders);
            // setUsers(false);
          }}
        >
          {orders ? "GO BACK" : "VIEW ORDERS"}
        </OrdersBtn>
      </BtnContainer>
      {!orders ? (
        <ItemsContainer>
          {products.map((product) => (
            <AdminItems key={product._id} product={product} />
          ))}
        </ItemsContainer>
      ) : (
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
              {ordersState.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>
                      {order.orderItems.map((item) => (
                        <p style={{ margin: "5px 0" }} key={item._id}>
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
      )}
    </AdminContainer>
  );
};

export default Admin;
