import cors from "cors";
import express from "express";
import app from "../src/app.js";
import connectDB from "./db/db.js";

import dotenvenv from "dotenv";

dotenvenv.config();

const port = process.env.PORT || 3000;

connectDB()
  .then(
    app.listen(port, (req, res) => {
      console.log(`derver lisning on http://localhost:${port}  `);
    })
  )

  .catch((err) => {
    console.error("mongodb connection error", err);
    process.exit(1);
  });
