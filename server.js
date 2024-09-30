// import express from 'express';
// import dotenv from 'dotenv';
// import AuthRouter from './src/routes/auth.js'
// import { globalMiddleWare } from './src/middlewares/auth.js';
// import { authCheck } from './src/middlewares/auth.js';
// import morgan from 'morgan'
// import { connectDB } from './src/config/dbConfig.js';
// dotenv.config();

// const app = express();
// app.use(express.json()); // for passing res body


// const port = process.env.PORT || 8000;
// const dbUrl = process.env.MONGODB_URL;
// connectDB(dbUrl);
// const data = 'server is running live';

// // middlewares
// app.use(globalMiddleWare)
// app.use(morgan('dev'));


// app.get('/', (req, res) => {
//   res.json(data);
// });
//  // Authentication middleware


// // Auth Router
// app.use('/api/auth', AuthRouter); //localhost/api/auth/login





// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });











import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import AuthRouter from "./src/routes/auth.js";
// import { globalMiddleware } from "./src/middlewares/auth.js";
import { connectDB } from "./src/config/dbConfig.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json()); // For parsing req body

// Enable CORS
app.use(cors())

// middlewares
app.use(morgan("dev"));
// app.use(globalMiddleware)


app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to Homepro Backend API" });
});
// Auth Routes
app.use("/api/auth", AuthRouter); // localhost:8080/api/auth/login

const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

// Connect to MongoDB database
connectDB(dbUrl)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});