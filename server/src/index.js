import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()
import morgan from "morgan"

import routesAuth from "./routes/auth.routes.js"

// Create Server
const app = express();

// Public directory - Middleware use
app.use(express.static("public"));
app.use(morgan("dev"))

// Read and parse body
app.use(express.json())

// Routes
// TODO: auth // crear, login, renew
app.use('/api/auth', routesAuth);


// Petitions
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});