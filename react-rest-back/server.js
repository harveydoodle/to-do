// FEEDBACK:
// 1) Nice job on the base assignment. Nothing much else to say here!
// 2) Did your diving deeper work? I tried testing it by changing your post and get request urls on the front-end but it wouldn't write to
// your file. I'm wondering if you got the same JSON.parse error. 

// - Thuy

const express = require('express');
const app = express();
// const post_routes = require('./routes/post_routes'); 
// allows us to use body-parser
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let serverdata = [];

app.get('/',(req,res) =>{
    res.json(serverdata) // save state here
})

app.post('/', (req,res)=>{
    serverdata = req.body; 
    res.send(serverdata); // this sends up to date to do lsit data to the client browser
})

// let counter = 0;

// app.get('/counter',(req,res) =>{
//     res.json(counter) // save state here
// })

// app.post('/counter', (req,res)=>{
//     counter = req.body; //array
//     res.send(counter);

//     console.log(req.body)
// })

// use post_routes module to handle any HTTP requests that start with /api/posts
// app.use('/api/posts',post_routes);	 

// app.use('/', post_routes);


app.listen(8080, () => {
    console.log('Server running on: http://localhost:8080');
});


