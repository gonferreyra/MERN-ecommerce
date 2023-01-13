import mongoose from "mongoose";

const dbConection = async () => {
  try {
    // warning on console from mongoose, use strickQuery false to remove it
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_CNN);
    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error initializing Database");
  }
};

export default dbConection;
