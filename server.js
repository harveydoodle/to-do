const express = require('express')
    app = express();

/*app.get('/',function(req,res){
    res.send('Express is running!')
})*/

app.use(express.static('publicjournal'));

app.post('/',function(req,res){ // what is this for - Thuy
    res.send('POST')
})

app.listen(8080, function(){
    console.log('Server started on local host 8080')
})