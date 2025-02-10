import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI as string)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://127.0.0.1:${PORT}`));
