const express = require("express");
const bodyparser = require('body-parser');
const cors =require('cors');
const app = express();

//middleware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);
console.log('reached Index');
// Handle production
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production'){

    console.log('In production');

    // Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));