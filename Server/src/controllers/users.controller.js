import { request, response } from "express";
import { validationResult } from "express-validator";
import generateJWT from "../helpers/jwt.js";
import User from "../models/User.js";

export const getAllUsers = async (req = request, res = response) => {
  const { id } = req.params;

  const users = await User.find(id);

  res.json({
    users,
  });
};

export const createUser = async (req = request, res = response) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "There is already a user with that email",
      });
    }

    user = new User({
      name,
      email,
      password,
      role,
    });

    // Encrypy password (function in User Model)
    user.password = await User.encryptPassword(user.password);

    // Save on database
    await user.save();

    // JWT
    const token = await generateJWT(user.id, user.name, user.role);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error. Contact administrator",
    });
  }
};

export const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  // Traemos el usuario de donde lo almacenamos en la validacion del JWT
  const authenticatedUser = req.user;

  res.json({ user, authenticatedUser });
};
