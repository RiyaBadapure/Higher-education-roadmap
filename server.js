const express = require("express");
const educationData = require("./data/educationData");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Education Roadmap API is running 🚀");
});

// Roadmap Route
app.get("/roadmap", (req, res) => {

    const stream = req.query.stream?.toLowerCase();
    const degree = req.query.degree?.toLowerCase();

    // If no stream selected
    if (!stream) {
        return res.json({
            message: "Please select a stream",
            availableStreams: Object.keys(educationData)
        });
    }

    // If invalid stream
    if (!educationData[stream]) {
        return res.json({
            message: "Invalid stream selected",
            availableStreams: Object.keys(educationData)
        });
    }

    // If stream selected but no degree
    if (!degree) {
        return res.json({
            message: `Available Degrees in ${stream}`,
            degrees: educationData[stream].availableDegrees
        });
    }

    // If invalid degree
    if (!educationData[stream][degree]) {
        return res.json({
            message: "Invalid degree selected",
            degrees: educationData[stream].availableDegrees
        });
    }

    // If everything correct
    res.json(educationData[stream][degree]);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});