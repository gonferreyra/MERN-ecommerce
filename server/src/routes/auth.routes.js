/*
    User routes / auth
    host = /api/auth/
*/

import { Router } from 'express';
const router = Router();
import { createUser, loginUser, renewToken } from '../controllers/auth.controller.js'
import { check } from 'express-validator';


// Endpoints 
router.post('/new', [
    check('name', "Name is required").notEmpty(),
    check('email', "Email is required").isEmail(),
    check('password', "Password must have at least 6 characters").isLength({ min: 6 })
], createUser);

router.post('/', loginUser);
router.get('/renew', renewToken);

export default router;