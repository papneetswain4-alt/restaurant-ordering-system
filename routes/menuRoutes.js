const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();


// GET ALL ITEMS
router.get("/", async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});


// ADD ITEM
router.post("/", async (req, res) => {
  const item = new Menu(req.body);
  await item.save();
  res.json(item);
});


// UPDATE ITEM
router.put("/:id", async (req, res) => {
  const item = await Menu.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
});


// DELETE ITEM
router.delete("/:id", async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
