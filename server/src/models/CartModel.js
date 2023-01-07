import mongoose from "mongoose";
const cartProductsSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "mobile" },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CartModel = mongoose.model("cart", cartProductsSchema);

export default CartModel;
