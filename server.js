import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// TEST Route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is Running ✔️");
});

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://pcmsd07:pra07vinpra07vin@multinews07.6z8bcnu.mongodb.net/newsdb",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/news", router);

// Render PORT Fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
