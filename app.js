const express =require('express');

const bodyParser =require('body-parser');

const nodemailer =require('nodemailer');

const app =express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.render('index');
    console.log('done loading');
});


app.listen(3001, function(){
    console.log('Listening to port ${PORT}');
});
