import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/index.js';

///routes import
import authRouter from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

const app = express();

///middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

///
app.use('/api/auth', authRouter);

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
