import dotenv from "dotenv";
dotenv.config(); // Load .env FIRST before anything else reads process.env

import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI!;

// The '!' tells TypeScript "trust me, this won't be undefined"
// In production you'd want a proper check here instead

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
