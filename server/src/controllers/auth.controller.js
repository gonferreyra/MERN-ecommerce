import { request, response } from "express";
import { validationResult } from "express-validator";

export const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body;

    // Handle errors - express validator middelware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'Create user',
        name,
        email,
        password
    })
};

export const loginUser = (req = request, res = response) => {
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'Login',
        email,
        password
    })
}


export const renewToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew jwt'
    })
}