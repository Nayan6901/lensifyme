import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import dotenvenv from "dotenv";

dotenvenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(port, (req, res) => {
  console.log(`server is listing on port ${port}  `);
});
