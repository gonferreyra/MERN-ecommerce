import Product from "../models/Product.js";
import User from "../models/User.js";

export const existsProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error(`Product with id ${id} doesn't exist`);
  }
};

export const existsUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`User with id ${id} doesn't exist`);
  }
};
