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

app.use(bodyParser.json());



// POST route for form submission
app.post('/', function(req, res) {
    const { name, email, message } = req.body;

    // Create transporter with Gmail service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shriharshranjangupta@gmail.com',
            pass: process.env.PASSWORDING // Use environment variable for password
        }
    });

    // Email options
    const mailOptions = {
        from: 'shriharshranjangupta@gmail.com',
        to: 'hitrjn@gmail.com',
        cc: email, // Use the provided email for CC
        subject: `Thanks for your message, ${name}`, // Use the name as the subject
        text: message // Use the message as the text content
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});





app.listen(3001, function(){
    console.log('Listening to port ${PORT}');
});
