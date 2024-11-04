import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,   
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required:true,
  },
  walletId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  role: {
    type: Schema.Types.String,
    required: true,
  },
  isActive: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const User = model("User", userSchema);

export default User;