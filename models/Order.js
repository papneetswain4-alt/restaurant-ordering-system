const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String },
    },

    items: [
      {
        itemId: String,
        name: String,
        price: Number,
        qty: Number,
      }
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    address: {
      name: String,
      phone: String,
      address: String,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "UPI"],
      required: true,
    },

    upiId: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      default: "PLACED", // PLACED → PREPARING → DELIVERED
    }
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Order", OrderSchema);
