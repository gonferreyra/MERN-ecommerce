/*
    User routes / products
    host = /api/products/
*/

import { Router } from "express";
import {
  createProducts,
  deleteProductById,
  getProducts,
  updateProductById,
} from "../controllers/products.controller.js";
import { check } from "express-validator";
import validateJWT from "../middlewares/validate-jwt.js";
import fieldsValidator from "../middlewares/fields-validator.js";
import { existsProductById } from "../helpers/db-validators.js";
const router = Router();

// Endpoints
router.get("/", getProducts);

router.post(
  "/",
  [
    validateJWT,
    check("name", "Product name is required").notEmpty(),
    check("category", "Product category is required").notEmpty(),
    check("price", "Product price is required").notEmpty(),
    check("info", "Product info is required").notEmpty(),
    fieldsValidator,
  ],
  createProducts
);

router.put(
  "/:id",
  [validateJWT, check("id").custom(existsProductById), fieldsValidator],
  updateProductById
);

router.delete(
  "/:id",
  [validateJWT, check("id").custom(existsProductById)],
  deleteProductById
);

export default router;
