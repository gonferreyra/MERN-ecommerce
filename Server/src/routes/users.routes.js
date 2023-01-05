/*
    User routes / auth
    host = /api/users/
*/

import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../controllers/users.controller.js";
// import { validationResult } from "express-validator";
import { check } from "express-validator";
import fieldsValidator from "../middlewares/fields-validator.js";
import validateJWT from "../middlewares/validate-jwt.js";
import isAdmin from "../middlewares/role-validator.js";

const router = Router();

router.get("/", getAllUsers);

router.post(
  "/new",
  [
    // middelwares
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
    check("rol", "Role not valid").isIn("ADMIN_ROLE", "USER_ROLE"),
    fieldsValidator,
  ],
  createUser
);

router.delete("/:id", [validateJWT, isAdmin], deleteUser);

export default router;
