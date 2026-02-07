const express = require("express");
const router = express.Router();
const User = require("./User");

// Lấy thông tin profile theo id
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "Không tìm thấy user" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Cập nhật profile
router.put("/:id", async (req, res) => {
    try {
        const { username } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { username },
            { new: true }
        ).select("-password");

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;