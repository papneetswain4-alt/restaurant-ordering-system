const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// GET aggregated customers
router.get("/", async (req, res) => {
  try {
    const customers = await Order.aggregate([
      {
        $group: {
          _id: { $ifNull: ["$user.email", "guest"] },
          name: { $first: { $ifNull: ["$user.name", "Guest"] } },
          email: { $first: { $ifNull: ["$user.email", "guest"] } },
          totalOrders: { $sum: 1 },
          totalSpent: { $sum: "$totalAmount" },
          lastOrder: { $max: "$createdAt" }
        }
      },
      { $project: { _id: 0, name: 1, email: 1, totalOrders: 1, totalSpent: 1, lastOrder: 1 } },
      { $sort: { totalSpent: -1 } }
    ]);
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
});

// GET orders by customer email
router.get("/customer/:email", async (req, res) => {
  try {
    const orders = await Order.find({ "user.email": req.params.email }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch customer orders" });
  }
});

module.exports = router;