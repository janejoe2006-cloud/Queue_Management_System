const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const queueRoutes = require("./routes/queueRoutes");
const patientRoutes = require("./routes/patientRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/queues", queueRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Queue Management API is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});