import { request, response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const validateJWT = async (req = request, res = response, next) => {
  // x-token from headers
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There is no token on the request",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

    // Almacenamos el usuario para usar mas adelante
    const user = await User.findById(payload.uid);

    req.user = user;
    // req.name = payload.name;
    // req.role = payload.role;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid Token",
    });
  }

  // next();
};

export default validateJWT;
