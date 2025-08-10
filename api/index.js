import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import commentRoute from "./routes/comment.route.js";
import cookeParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const path = require("path");

mongoose
  .connect(`${process.env.MONGO_URL}mern-blog`)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json());
app.use(cookeParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working!!");
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

(function fn() {
  if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/client/dist")));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    );
  } else {
    app.get("/", (req, res) => {
      res.send("API is running....");
    });
  }
})();

app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.status || 500;
  const message = err.message || "Internal server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
