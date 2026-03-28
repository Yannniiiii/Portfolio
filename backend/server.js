// backend/server.js

// ✅ Load environment variables first
import 'dotenv/config'; // automatically loads .env

import express from "express";
import cors from "cors";
import aboutRoutes from "./routes/aboutRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👉 Health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Routes
app.use("/api/about", aboutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("SUPABASE_URL:", process.env.SUPABASE_URL ? "Loaded ✅" : "Missing ❌");
  console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY ? "Loaded ✅" : "Missing ❌");
});