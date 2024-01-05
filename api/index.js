import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO);
mongoose
  .connect(`${process.env.MONGO}mern-blog`)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
