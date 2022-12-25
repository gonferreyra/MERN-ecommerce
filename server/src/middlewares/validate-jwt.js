import { request, response } from 'express';
import jwt from 'jsonwebtoken';

const validateJWT = (req = request, res = response, next) => {

    // x-token from headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "There is no token on the request"
        })
    }

    try {

        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = payload.uid;
        req.name = payload.name;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        });
    }

    next();
};

export default validateJWT;