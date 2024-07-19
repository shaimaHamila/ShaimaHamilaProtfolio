import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  isDeleted: Boolean,
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
