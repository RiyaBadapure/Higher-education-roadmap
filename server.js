const express = require("express");
const app = express();
const PORT = 3000;

// Import routes
const roadmapRoutes = require("./routes/roadmap");

// Middleware
app.use(express.json());
app.use(express.static('./frontend', { index: false }));  // ← add index: false

// Use routes with /api prefix
app.use("/api", roadmapRoutes);

// Always opens welcome.html first
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/welcome.html");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});