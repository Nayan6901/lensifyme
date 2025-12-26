import cors from "cors";
import express from "express";

import dotenvenv from "dotenv";

dotenvenv.config({});

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["PUT", "GET", "DELETE", "POST", "POST", "PATCH", "OPTIONS"],
    allowedHeaders: ["Authorisation", "Content-Type"],
  })
);

//import router

import HealthCheackRoute from "../src/routes/healthcheack.route.js";

app.use("/api/v1/healthcheack", HealthCheackRoute);

app.get("/", (req, res) => {
  res.send("api is running");
});

export default app;
