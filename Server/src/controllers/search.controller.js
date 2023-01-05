import { request, response } from "express";
import { ObjectId } from "mongoose";
import Product from "../models/Product.js";

// const searchProducts = async (terms = '', res = response) => {
//     const isMongoId = ObjectId.isValid(terms);

//     if (isMongoId) {
//         const product = await Product.findById(terms);
//         return res.json({

//         })
//     }
// };

export const search = async (req = request, res = response) => {
  const { terms } = req.params;

  // const products = await Product.find({ name: terms }, (error, data) => {
  //     if (error) {
  //         console.log(error)
  //     } else {
  //         console.log(data)
  //     }
  // });

  res.json({
    terms,
  });
};
