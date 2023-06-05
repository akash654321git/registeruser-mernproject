// Assuming you already have the 'mongoose' package imported
import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User

