const express = require("express");
const supabase = require("../config/supabaseClient");

const router = express.Router();

// Temporary data (later replaced by Supabase)
let queues = [
    {
        id: 1,
        department: "Cardiology",
        doctor: "Dr. Smith",
        waitingPatients: 10
    }
];


// =====================
// GET - Get all queues
// =====================
router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("Queue")
            .select("*");

        if (error) {
            return res.status(500).json({
                message: "Failed to fetch queues",
                error: error.message
            });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
});


// =====================
// GET - Get queue by ID
// =====================
router.get("/:id", (req, res) => {
    const queue = queues.find(
        q => q.id == req.params.id
    );

    if (!queue) {
        return res.status(404).json({
            message: "Queue not found"
        });
    }

    res.json(queue);
});


// =====================
// POST - Create queue
// =====================
router.post("/", (req, res) => {

    const newQueue = {
        id: queues.length + 1,
        department: req.body.department,
        doctor: req.body.doctor,
        waitingPatients: req.body.waitingPatients
    };

    queues.push(newQueue);

    res.status(201).json({
        message: "Queue created",
        queue: newQueue
    });
});


// =====================
// PUT - Update queue
// =====================
router.put("/:id", (req, res) => {

    const queue = queues.find(
        q => q.id == req.params.id
    );

    if (!queue) {
        return res.status(404).json({
            message: "Queue not found"
        });
    }

    queue.department = req.body.department || queue.department;
    queue.doctor = req.body.doctor || queue.doctor;
    queue.waitingPatients =
        req.body.waitingPatients || queue.waitingPatients;

    res.json({
        message: "Queue updated",
        queue: queue
    });
});


// =====================
// DELETE - Delete queue
// =====================
router.delete("/:id", (req, res) => {

    queues = queues.filter(
        q => q.id != req.params.id
    );

    res.json({
        message: "Queue deleted"
    });
});


module.exports = router;