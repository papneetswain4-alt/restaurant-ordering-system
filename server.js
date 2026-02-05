require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");
const adminAuthRoutes = require("./routes/adminAuth");
const customerRoutes = require("./routes/customers");
const menuRoutes = require("./routes/menuRoutes");




const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Foodify Backend Running 🚀");
});

// 🔥 ORDERS ROUTE
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/menu", menuRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

