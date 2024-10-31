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
    ref: "Participants",
    required: true,
  },
  speciesFound: {
    type: Schema.Types.ObjectId,
    ref: "SpeciesFound",
    required: true,
  },
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;