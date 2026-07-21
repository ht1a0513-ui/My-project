import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoMemoryServer } from "mongodb-memory-server";

dotenv.config();

let memoryServer;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment.");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      console.error("Database Error:", error.message);
      process.exit(1);
    }

    console.warn(
      "Primary MongoDB connection failed. Falling back to an in-memory MongoDB instance for development."
    );

    memoryServer = await MongoMemoryServer.create();
    await mongoose.connect(memoryServer.getUri());
    console.log("MongoDB Connected to in-memory server");
  }
};

export default connectDB;
