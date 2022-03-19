const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const posts = require('./routes/api/posts');

app.use("/api/posts", posts);


// important part
app.listen(port, () => {
    console.log(`backend server app is running on port ${port}`);
});