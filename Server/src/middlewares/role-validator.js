import { request, response } from "express";
import User from "../models/User.js";

const isAdmin = (req = request, res = response, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "Token must be validated first.",
    });
  }

  const { role, name } = req.user;

  if (role != "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${name} is not Administrator`,
    });
  }

  next();
};

export default isAdmin;
