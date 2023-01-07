import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
dotenv.config();

import UserController from "./controllers/UserController.js";
import JeansController from "./controllers/JeansController.js";
import KurtiController from "./controllers/KurtiController.js";
import TopController from "./controllers/Top.controller.js";
import CartController from "./controllers/CartController.js";
import dbConnection from "./configs/db.js";

app.use("/auth", UserController);
app.use("/jeans", JeansController); 
app.use("/kurtis", KurtiController);
app.use("/tops", TopController);
app.use("/cart", CartController);

app.listen(port, async (req, res) => {
  try {
    await dbConnection();
    console.log("listening on port 4001");
  } catch (e) {
    res.send(e);
  }
});
