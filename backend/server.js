const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

const queueRoutes = require("./routes/queueRoutes");

app.use("/api/queues", queueRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Queue Management API is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});