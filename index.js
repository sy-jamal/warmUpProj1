var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', function(req, res)
{
    res.send("This is the main page")
});
app.post('/ttt/', function(req, res)
{

});
app.post('/ttt/play',function(req,res){

});