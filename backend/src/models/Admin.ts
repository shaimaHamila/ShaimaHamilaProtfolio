import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: [6, "Minimum password length is 6 characters"],
    required: [true, "Password required"],
  },
});
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
