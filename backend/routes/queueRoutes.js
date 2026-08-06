const express = require("express");

const router = express.Router();

// GET all queues
router.get("/", (req, res) => {
    res.json({
        message: "All queues fetched"
    });
});

// POST create queue
router.post("/", (req, res) => {
    res.json({
        message: "Queue created"
    });
});

module.exports = router;