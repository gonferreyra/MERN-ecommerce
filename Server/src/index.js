import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from "cors";

import routesAuth from "./routes/auth.routes.js";
import routesProducts from "./routes/product.routes.js";
import routesSearch from "./routes/search.routes.js";
import routesUsers from "./routes/users.routes.js";
import dbConection from "./database/config.js";

// Create Server
const app = express();

// Database
dbConection();

// Public directory - Middleware use
app.use(express.static("public"));
app.use(morgan("dev"));

// Cors
app.use(cors());

// Read and parse body
app.use(express.json());

// Routes
// TODO: auth // crear, login, renew
app.use("/api/auth", routesAuth);
app.use("/api/products", routesProducts);
app.use("/api/search", routesSearch);
app.use("/api/users", routesUsers);

// Petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
