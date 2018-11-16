var express = require('express');
var router = express.Router();


/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/phraseDB',{ useNewUrlParser: true }); //Connects to a mongo database called "commentDB"

var phraseScheme = mongoose.Schema({ //Defines the Schema for this database
    Phrase: String,
    Category: String
});

var Phrase = mongoose.model('Phrase', phraseScheme); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});





/* POSTING OF PHRASES */
router.post('/inspirational', function(req, res, next) {
    console.log("POST inspirational route"); 
    console.log(req.body);
    
    var newPhrase = new Phrase(req.body); 
    console.log(newPhrase); 
    newPhrase.save(function(err, post) { 
      if (err) return console.error(err);
      console.log(post);
      res.sendStatus(200);
    });
});

router.post('/relationship', function(req, res, next) {
    console.log("POST relationship route"); 
    console.log(req.body);
    
    var newPhrase = new Phrase(req.body); 
    console.log(newPhrase); 
    newPhrase.save(function(err, post) { 
      if (err) return console.error(err);
      console.log(post);
      res.sendStatus(200);
    });
});

router.post('/academics', function(req, res, next) {
    console.log("POST academics route"); 
    console.log(req.body);
    
    var newPhrase = new Phrase(req.body); 
    console.log(newPhrase); 
    newPhrase.save(function(err, post) { 
      if (err) return console.error(err);
      console.log(post);
      res.sendStatus(200);
    });
});

router.post('/funny', function(req, res, next) {
    console.log("POST funny route"); 
    console.log(req.body);
    
    var newPhrase = new Phrase(req.body); 
    console.log(newPhrase); 
    newPhrase.save(function(err, post) { 
      if (err) return console.error(err);
      console.log(post);
      res.sendStatus(200);
    });
});

/*END POSTING OF PHRASES */


/* Slaughter all Entries */
router.get('/deleteAll', function(req, res, next) {
    console.log("Delete all route"); 
    
    Phrase.deleteMany({},function(err, post) { 
      if (err) return console.error(err);
      else{
      res.sendStatus(200);
      }
    });
});







router.get('/inspirational', function(req, res, next) {
    console.log("get insp phrase route");

    Phrase.find({Category:"Inspirational"}, function (err, docs) {
      
      if (err) return console.error(err); //If there's an error, cry
      else {
        console.log(docs);
        res.json(docs); //Then send the comment
      }
    });
});


/*GETTING PHRASES*/
router.get('/inspirational', function(req, res, next) {
    console.log("get insp phrase route");

    Phrase.find({Category:"Inspirational"}, function (err, docs) {
      
      if (err) return console.error(err); //If there's an error, cry
      else {
        console.log(docs);
        res.json(docs); //Then send the comment
      }
    });
});

router.get('/relationships', function(req, res, next) {
    console.log("get relationship phrase route");

    Phrase.find({Category:"Relationships"}, function (err, docs) {
      
      if (err) return console.error(err); //If there's an error, cry
      else {
        console.log(docs);
        res.json(docs); //Then send the comment
      }
    });
});

router.get('/academics', function(req, res, next) {
    console.log("get academic phrase route");

    Phrase.find({Category:"Academics"}, function (err, docs) {
      
      if (err) return console.error(err); //If there's an error, cry
      else {
        console.log(docs);
        res.json(docs); //Then send the comment
      }
    });
});

router.get('/funny', function(req, res, next) {
    console.log("get funny phrase route");

    Phrase.find({Category:"Funny"}, function (err, docs) {
      
      if (err) return console.error(err); //If there's an error, cry
      else {
        console.log(docs);
        res.json(docs); //Then send the comment
      }
    });
});









module.exports = router;
