import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(`${process.env.MONGO}mern-blog`)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
