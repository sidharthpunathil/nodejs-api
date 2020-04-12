const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const postRoute = require('./routes/posts');


//Middlewares
// app.use('/posts',()=>{
//     console.log('This is a middleware')
// });
app.use(bodyParser.json());
app.use('/post',postRoute);



app.get('/',(req, res)=> {
    res.send("We are on home");
})


//Connect DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    ()=> console.log('connected to db')    
);

//How to start lisiting to the server
app.listen(3000);
 

