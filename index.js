const express = require('express');
const { default: mongoose } = require('mongoose');
const { resolve } = require('path');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database",error);
  }
  
});
