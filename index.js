//require('dotenv').config();

// Exresss
const express = require('express');
const app = express();

const cors = require('cors');

// PORT
const PORT = process.env.PORT || 3000;

const NEWSAPIKEY = process.env.NEWSAPIKEY;

const newsRouter = require('./routes/news-route');

app.use(express.json());
app.use(cors());

app.use("/news", newsRouter);

app.listen(PORT);