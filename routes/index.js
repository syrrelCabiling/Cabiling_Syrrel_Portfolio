const express = require('express');
const router = express.Router();
var auth = require('../config/mailTo');
const sql = require('../utils/sql');
var mailer = require('nodemailer');


// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});


router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})


router.get('/contact', function (req, res, next) {
	res.render('contact', { layout: 'contact-layout', title: 'Contact Me' });
});


connect.getConnection((err, connection) => {
    if (err) { return console.log(error.message); }


router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, ProjName, DispImg, Text FROM tbl_projects"; // make several of this for each section on the page

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { piece: result }); //data is a generic key
    
        })
    })
})

//secondary route that targets each person like localhost:3000/anything
router.get('/users/:id', (req,res) => {
    console.log('hit a dynamic route!');
    console.log(req.params.id);

        let query = `SELECT * FROM tbl_folio WHERE ID="${req.params.id}"`; // params will give you either 1, 2, or 3
    
       sql.query(query, (err, result) => {
          if (err) { throw err; console.log(err); }
    
          console.log(result); // should see objects wrapped in an array


            //turn our social porperty into an array - its just text in the db which isnt really anything we can work with.
         //   result[0].social = result[0].social.split(",").map(function(item) {
           //     item = item.trim(); // remove the etxra saces from each word

           //     return item;
       //     }); //chopping the words

           // console.log('after split: ', result[0]);
            // render the home view with dynamic data
        res.json(result); //data is a generic key; send the db query back to the browser
        
    })
}) // name id anything you want


module.exports = router;