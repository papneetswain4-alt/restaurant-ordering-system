const express = require("express");
const admins = require("../config/admins");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const admin = admins.find(
    a => a.email === email && a.password === password
  );

  if (!admin) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  res.json({
    message: "Admin login successful",
    admin: {
      email: admin.email,
      role: admin.role
    }
  });
});

module.exports = router;
