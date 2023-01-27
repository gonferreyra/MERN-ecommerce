import { request, response } from "express";
import { validationResult } from "express-validator";
import generateJWT from "../helpers/jwt.js";
import { googleVerify } from "../middlewares/google-token-verify.js";
import User from "../models/User.js";

export const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: `"${email}" not register in database`,
      });
    }

    // Confirm passwords
    const validPassword = await User.comparePassword(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }

    // JWT
    const token = await generateJWT(user.id, user.name, user.role);

    res.json({
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

export const renewToken = async (req = request, res = response) => {
  const { id, name, role, img, google } = req.user;

  const token = await generateJWT(id, name, role, img, google);

  res.json({
    ok: true,
    uid: req.user.id,
    name,
    role,
    img,
    google,
    token,
  });
};

export const googleSignIn = async (req = request, res = response) => {
  const { idToken, userInfo } = req.body;
  const { accessToken } = idToken;
  const { displayName, email, photoURL } = userInfo.user;

  try {
    const googleUser = await googleVerify(accessToken);
    // console.log(googleUser);
    let user = await User.findOne({ email });
    console.log(`user ${user}`);
    if (!user) {
      user = new User({
        name: displayName,
        email,
        password: ":", // No hay problema con la contraseña ya que tenemos el hash que al comparar nunca va a hacer match
        img: photoURL,
        google: true,
      });
      await user.save();
    }
    // else {
    //   return res.status(409).json({
    //     msg: "Email already registered in database",
    //   });
    // }

    // JWT
    const token = await generateJWT(user.id, user.name, user.role, user.img);

    res.status(200).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Google Token is not valid",
    });
  }
};
