import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import routes from './routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});