import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

void startServer();
