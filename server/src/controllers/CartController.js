import express from "express";
const router = express.Router();
import CartModel from "../models/CartModel.js";

router.post("/", async (req, res) => {
  try {
    let cart = await CartModel.create(req.body);
    return res.send(cart);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    let cart = await CartModel.find().populate("productId").lean().exec();
    return res.send(cart);
  } catch (e) {
    return res.send(e);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = res.params.id;
    let cart = await CartModel.find(id).lean().exec();
    return res.send(cart);
  } catch (error) {
    return res.send(error);
  }
});

export default router;
