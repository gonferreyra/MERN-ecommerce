import React from "react";
import { useSelector } from "react-redux";
import AdminItems from "./ItemsCard/AdminItems.jsx";
import { AdminContainer, AdminH1, ItemsContainer } from "./AdminStyle.js";

const Admin = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <AdminContainer>
      <AdminH1>ADMIN MENU</AdminH1>
      <ItemsContainer>
        {products.map((product) => (
          <AdminItems key={product._id} product={product} />
        ))}
      </ItemsContainer>
    </AdminContainer>
  );
};

export default Admin;
