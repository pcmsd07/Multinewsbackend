import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: String,
    category: String,
    image: String,
    short_desc: String,
    full_desc: String,
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("News", NewsSchema);