/*
    User routes / search
    host = /api/search/
*/

import { Router } from "express";
import { search } from "../controllers/search.controller.js";

const router = Router();

router.get('/:terms', search)

export default router;