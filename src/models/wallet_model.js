import { Schema, model } from "mongoose";

const walletSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,   
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  balance: {
    type: Schema.Types.Number,
    required: true,
  },
  currency: {
    type: Schema.Types.String,
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required:true,
  },
});

const Wallet = model("Wallet", walletSchema);

export default Wallet;