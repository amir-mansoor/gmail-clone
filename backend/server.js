import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

import cors from "cors";
dotenv.config();

connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
