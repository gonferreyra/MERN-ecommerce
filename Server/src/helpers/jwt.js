import jwt from "jsonwebtoken";

const generateJWT = (uid, name, role, img = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, role, img };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "48h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("Token wasn't generated");
        }
        resolve(token);
      }
    );
  });
};

export default generateJWT;
