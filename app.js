const express =require('express');

const bodyParser =require('body-parser');

const nodemailer =require('nodemailer');

require('dotenv').config();


const app =express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));


// Route to render embedded.ejs
app.get("/game", (req, res) => {
    res.render('game');
});


app.get("/",function(req,res){

    
    res.render('index');
    console.log('done loading');
});


app.get('/project', (req, res) => {
    res.render('project'); 
    console.log('done loading');
});





app.post("/",function(req,res)
{

    
    const comm=req.body.message;
    const comm1=req.body.name+req.body.email;


    var transporter =nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'shriharshranjangupta@gmail.com',
            pass: process.env.PASSWORDING,//password

        }
    })

    var mailOption={
        from:'shriharshranjangupta@gmail.com',
        to: 'hitrjn@gmail.com',
        cc:req.body.email,

        subject:req.body.name,
        text:req.body.message,

    }
    transporter.sendMail(mailOption, function(error,info){
        if(error)
            {
                console.log(error);
            }
            else{
                res.redirect('/');
                console.log("email sent"+info.response);
            }
    });
});
app.listen(3001, function(){
    console.log('Listening to port ${PORT}');
});
