import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/User.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
// CONNECTING TO THE DATABASE
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
