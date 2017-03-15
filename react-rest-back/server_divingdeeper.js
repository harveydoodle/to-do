// in components/App.js, change to localhost:8002 in ComponentDidMount and ComponentDidUpdate to run
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res) =>{
    fs.readFile('tododata.txt', 'UTF-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        let newdata = JSON.parse(data); // converts string back to object
        res.send(newdata);
    })
})

app.post('/', (req,res)=>{
    serverdata = JSON.stringify(req.body); // converse array to string to put into txt file
    fs.writeFile('tododata.txt', serverdata, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })

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


app.listen(8002, () => {
    console.log('Server running on: http://localhost:8002');
});


