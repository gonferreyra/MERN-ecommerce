/*
    User routes / auth
    host = /api/auth/
*/

import { Router } from "express";
const router = Router();
import {
  googleSignIn,
  loginUser,
  renewToken,
} from "../controllers/auth.controller.js";
import { check } from "express-validator";
import fieldsValidator from "../middlewares/fields-validator.js";
import validateJWT from "../middlewares/validate-jwt.js";
// import { authTokenFirebaseVerify } from "../middlewares/authTokenFirebaseVerify.js";

// Endpoints

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
    fieldsValidator,
  ],
  loginUser
);

router.post(
  "/google",
  [check("idToken", "Access Token is required").notEmpty(), fieldsValidator],
  googleSignIn
);

router.get("/renew", validateJWT, renewToken);

export default router;
