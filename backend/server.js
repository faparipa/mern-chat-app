import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectTOMongoDB.js';
import cookieParser from 'cookie-parser';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   //root rout http://localhost:5000/
//   res.send('Server is ready!');
// });
//midleware:
app.use(express.json()); // to parse the incominng request with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
