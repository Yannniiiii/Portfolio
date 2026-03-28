// backend/server.js
import express from "express";
import cors from "cors";
import aboutRoutes from "./routes/aboutRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/about", aboutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));