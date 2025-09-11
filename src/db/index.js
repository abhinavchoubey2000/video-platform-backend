import mongoose from "mongoose";
import { DatabaseName } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DatabaseName}`
    );
    console.log(`MongoDB Connected!! DB Host ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB Connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
