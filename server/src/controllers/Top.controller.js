import express from "express";
const router = express.Router();
import TopModel from "../models/TopModel.js";

router.post("/", async (req, res) => {
  try {
    let top = await TopModel.create(req.body);
    return res.send(top);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    let top = await TopModel.find().lean().exec();
    return res.send(top);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let top = await TopModel.findOne({ _id: req.params.id });
    return res.send(top);
  } catch (e) {
    return res.send(e);
  }
});
router.get("/filter", async (req, res) => {
  try {
    const toptitle = req.params.category;
    let top = await TopModel.find({ title: toptitle }).lean().exec();
    return res.send(top);
  } catch (error) {
    return res.send(error);
  }
});

export default router;
