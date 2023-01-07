import express from "express";
const router = express.Router();
import KurtiModel from "../models/KurtiModel.js";

router.post("/", async (req, res) => {
  try {
  let kurti = await KurtiModel.create(req.body);
    return res.send(kurti);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    let kurti = await KurtiModel.find().lean().exec();
    return res.send(kurti);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let kurti = await KurtiModel.findOne({ _id: req.params.id });
    return res.send(kurti);
  } catch (e) {
    return res.send(e);
  }
});
router.get("/filter", async (req, res) => {
  try {
    const kurtititle = req.params.category;
    let kurti = await KurtiModel.find({ title: kurtititle }).lean().exec();
    return res.send(kurti);
  } catch (error) {
    return res.send(error);
  }
});

export default router;
