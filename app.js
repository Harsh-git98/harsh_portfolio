const express =require('express');

const bodyParser =require('body-parser');
const axios = require('axios');
const nodemailer =require('nodemailer');

require('dotenv').config();











// reloader

// URL of the server itself
const url1=`https://login-register-backend-ed24.onrender.com/`;
const url2=`https://login-register-paralax.onrender.com/`;
const url = `https://harshranjan.onrender.com/`;

// Interval in milliseconds (e.g., 5000ms = 5 seconds)
const interval = 30000;

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}


// function reloadWebsite1() {
//   axios.get(url1)
//     .then(response => {
//       console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
//     })
//     .catch(error => {
//       console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
//     });
// }

// function reloadWebsite2() {
//   axios.get(url2)
//     .then(response => {
//       console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
//     })
//     .catch(error => {
//       console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
//     });
// }



// Set an interval to reload the website continuously
setInterval(reloadWebsite, interval);


// setInterval(reloadWebsite1, interval);
// setInterval(reloadWebsite2, interval);






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
