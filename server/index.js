import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import dataRoutes from './routes/dataRoutes.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} on port ${PORT}`));