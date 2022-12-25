import express, { response } from "express"
import { validationResult } from 'express-validator'

const fieldsValidator = (req, res = response, next) => {

    // Handle errors - express validator middelware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();

};

export default fieldsValidator;