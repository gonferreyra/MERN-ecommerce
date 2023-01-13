import { Router } from "express";
import {
  createNewOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUsers,
} from "../controllers/orders.controller.js";
import { check } from "express-validator";
import validateJWT from "../middlewares/validate-jwt.js";
import fieldsValidator from "../middlewares/fields-validator.js";
import { existsUserById } from "../helpers/db-validators.js";

const router = Router();

router.get("/", getAllOrders);

router.get("/:id", getOrderById);

router.get("/user/:userid", getOrdersByUsers);

router.post(
  "/",
  [
    check("orderItems", "Order Items is required").notEmpty(),
    check("user", "User is required").notEmpty(),
    check("user").custom(existsUserById),
    check("shippingAddress", "shippingAddress is required").notEmpty(),
    check("city", "City is required").notEmpty(),
    check("zipCode", "zipCode is required").notEmpty(),
    check("country", "Country is required").notEmpty(),
    check("phone", "Phone is required").notEmpty(),
    fieldsValidator,
  ],
  createNewOrder
);

export default router;
