import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminItems from "./ItemsCard/AdminItems.jsx";
import {
  AdminContainer,
  AdminH1,
  NewItemBtn,
  ItemsContainer,
} from "./AdminStyle.js";

const Admin = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <AdminContainer>
      <AdminH1>ADMIN MENU</AdminH1>
      <NewItemBtn to="/admin/add">ADD NEW SNEAKER</NewItemBtn>
      <ItemsContainer>
        {products.map((product) => (
          <AdminItems key={product._id} product={product} />
        ))}
      </ItemsContainer>
    </AdminContainer>
  );
};

export default Admin;
