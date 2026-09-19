const express = require("express");
const router = express.Router();

const supabase = require("../config/supabaseClient");

// GET all patients
router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("Patient")
            .select("*");

        if (error) {
            return res.status(500).json({
                message: "Failed to fetch patients",
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

module.exports = router;