import jwt from "jsonwebtoken";

const generateJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '48h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject("Token wasn't generated");
            }
            resolve(token)
        })
    });


};

export default generateJWT;