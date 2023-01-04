import { request, response } from "express";
import { validationResult } from "express-validator";
import generateJWT from "../helpers/jwt.js";
import User from "../models/User.js";


export const createUser = async (req = request, res = response) => {

    const { name, email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'There is already a user with that email'
            })
        }

        user = new User({
            name,
            email,
            password,
            role
        });

        // Encrypy password (function in User Model)
        user.password = await User.encryptPassword(user.password)

        // Save on database
        await user.save();

        // JWT
        const token = await generateJWT(user.id, user.name, user.role);


        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            role: user.role,
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error. Contact administrator'
        });
    }
};

export const loginUser = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: `"${email}" not register in database`
            })
        }

        // Confirm passwords
        const validPassword = await User.comparePassword(password, user.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect password'
            })
        }

        // JWT
        const token = await generateJWT(user.id, user.name, user.role);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            role: user.role,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error. Contact administrator'
        });
    }
}


export const renewToken = async (req = request, res = response) => {

    const { uid, name, role } = req;

    const token = await generateJWT(uid, name, role);

    res.json({
        ok: true,
        uid,
        name,
        role,
        token
    });
}