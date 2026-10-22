// Load env variables FIRST — before anything else 
const dotenv = require('dotenv') 
dotenv.config()


const express = require('express');
const connectDB = require("./config/database");

const app = express();

//request handler
app.get('/', (req, res) => {
  res.send('Hello, this is the backend for the Noise Complaint Heatmap project.');
});


const port = process.env.PORT || 5000;

// Start the server
connectDB().then(() => {
    console.log("Connected to MongoDB!!");

    app.listen(port, () => {
        console.log(`API is running on port ${port}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
});