import { request, response } from "express";
import Order from "../models/Order.js";
import mongoose, { ObjectId } from "mongoose";
import OrderItem from "../models/OrderItem.js";

export const getAllOrders = async (req = request, res = resolve) => {
  // We use populate to bring the 'name' of the user (we can do it with all params the user have). And we sort the orders by date from newest to oldest
  try {
    const orderList = await Order.find()
      .populate("user", "name")
      .sort({ dateOrdered: -1 });

    if (!orderList) {
      return res.status(400).json({
        msg: "There are no orders. List is Empty.",
      });
    }

    res.status(200).json(orderList);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getOrderById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const orderById = await Order.findById(id)
      .populate("user", "name")
      .populate({ path: "orderItems", populate: "product" });

    if (!orderById) {
      return res.status(404).json({
        msg: "No orders with that ID.",
      });
    }

    res.status(200).json(orderById);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrdersByUsers = async (req = request, res = response) => {
  try {
    const { userid } = req.params;

    const userOrderList = await Order.find({
      user: userid,
    })
      // we bring from user only the name, if we exclude the "name" it brings all the info of user
      // With path, we bring all the information of order items and products instead of only the id
      .populate("user", "name")
      .populate({ path: "orderItems", populate: "product" })
      .sort({ dateOrdered: -1 });

    if (!userOrderList) {
      return res
        .status(500)
        .json({ msg: "There are no orders made by the user." });
    }

    res.status(200).json(userOrderList);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createNewOrder = async (req = request, res = resolve) => {
  const orderItemsId = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );
  // We need to resolve the proise that are pending
  const orderItemsIdsResolve = await orderItemsId;

  const totalPrices = await Promise.all(
    orderItemsIdsResolve.map(async (orderItemsId) => {
      const orderItem = await OrderItem.findById(orderItemsId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );

  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

  // console.log(totalPrices);

  const newOrder = new Order({
    orderItems: orderItemsIdsResolve,
    user: req.body.user,
    shippingAddress: req.body.shippingAddress,
    city: req.body.city,
    zipCode: req.body.zipCode,
    country: req.body.country,
    phone: req.body.phone,
    totalPrice: totalPrice,
  });

  const orderSaved = await newOrder.save();

  res.status(200).json(orderSaved);
};
