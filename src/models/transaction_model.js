import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,   
  },
  walletFrom: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  walletTo: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Schema.Types.Number,
    required: true,
  },
  type: {
    type: Schema.Types.String,
    required:true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  currency: {
    type: Schema.Types.String,
    required: true,
  },
  details: {
    type: Schema.Types.String,
    required: true,
  },
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;