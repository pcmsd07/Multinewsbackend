import express from "express";
import News from "./models/News.js";

const router = express.Router();

// Add News
router.post("/add", async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.send("success");
    } catch {
        res.send("error");
    }
});

// Get All News
router.get("/all", async (req, res) => {
    const data = await News.find().sort({ _id: -1 });
    res.json(data);
});

// Delete News
router.post("/delete", async (req, res) => {
    await News.findByIdAndDelete(req.body.id);
    res.send("deleted");
});

export default router;