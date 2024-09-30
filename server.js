import express from 'express';
import dotenv from 'dotenv';
import AuthRouter from './src/routes/auth.js'
import { globalMiddleWare } from './src/middlewares/auth.js';
import { authCheck } from './src/middlewares/auth.js';
import morgan from 'morgan'
import { connectDB } from './src/config/dbConfig.js';
dotenv.config();

const app = express();
app.use(express.json()); // for passing res body


const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;
connectDB(dbUrl);
const data = 'server is running live';

// middlewares
app.use(globalMiddleWare)
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.json(data);
});
 // Authentication middleware


// Auth Router
app.use('/api/auth', AuthRouter); //localhost/api/auth/login





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
