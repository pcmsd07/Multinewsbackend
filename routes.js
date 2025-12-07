import express from "express";
import News from "./models/News.js";

const router = express.Router();

/* ------------------- ADD NEWS ------------------- */
router.post("/add", async (req, res) => {
    try {
        const { title, content, category, image } = req.body;

        // Validation
        if (!title || !content || !category) {
            return res.status(400).json({ status: "error", msg: "Missing fields" });
        }

        const news = new News({
            title,
            content,
            category,
            image
        });

        await news.save();
        res.status(201).json({ status: "success", msg: "News added", data: news });

    } catch (error) {
        res.status(500).json({ status: "error", msg: "Server error" });
    }
});


/* ------------------- GET ALL NEWS ------------------- */
router.get("/all", async (req, res) => {
    try {
        const data = await News.find().sort({ _id: -1 }); // Latest first
        res.json({ status: "success", data });
    } catch (error) {
        res.status(500).json({ status: "error", msg: "Unable to fetch news" });
    }
});


/* ------------------- DELETE NEWS ------------------- */
router.post("/delete", async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", msg: "ID missing" });
        }

        await News.findByIdAndDelete(id);
        res.json({ status: "success", msg: "News deleted" });

    } catch (error) {
        res.status(500).json({ status: "error", msg: "Unable to delete news" });
    }
});


export default router;
