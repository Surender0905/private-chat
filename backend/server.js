import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/index.js';
dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

const app = express();
///routes import

///middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

///
app.get('/', async (req, res) => {
  res.send('hell0 world');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
