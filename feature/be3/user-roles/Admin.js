const express = require("express");
const router = express.Router();
const User = require("./User");

// Lấy danh sách tất cả user
router.get("/users", async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Xóa user theo id
router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Đã xóa user" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
