const express = require("express");
const router = express.Router();
const educationData = require("../../data/educationData");
// const educationData = require("../data/educationData");

// Get all streams
router.get("/streams", (req, res) => {
  res.json({ streams: Object.keys(educationData) });
});

// Get degrees by stream
router.get("/degrees/:stream", (req, res) => {
  const stream = req.params.stream;
  const degrees = educationData[stream] ? Object.keys(educationData[stream]) : [];
  res.json({ stream, degrees });
});

// Get complete roadmap by stream and degree
router.get("/roadmap/:stream/:degree", (req, res) => {
  const { stream, degree } = req.params;
  const roadmap = educationData[stream]?.[degree];
  if (!roadmap) return res.status(404).json({ message: "Not found" });
  res.json(roadmap);
});

module.exports = router;