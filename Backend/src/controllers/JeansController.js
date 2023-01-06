import express from "express";
const router = express.Router();
import JeansModel from "../models/JeansModel.js";

router.post("/", async (req, res) => {
  try {
    let jeans = await JeansModel.create(req.body);
    return res.send(jeans);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    let jeans = await JeansModel.find().lean().exec();
    return res.send(jeans);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let jeans = await JeansModel.findOne({ _id: req.params.id });
    return res.send(jeans);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/filter", async (req, res) => {
  try {
    const jeanstitle = req.params.category;
    let jeans = await JeansModel.find({ title: jeanstitle }).lean().exec();
    return res.send(jeans);
  } catch (error) {
    return res.send(error);
  }
});

export default router;
