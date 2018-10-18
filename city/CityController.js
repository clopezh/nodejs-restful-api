var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var City = require('./City');

// CREATES A NEW City
router.post('/', function (req, res) {
    City.create({
            name : req.body.name,
            state : req.body.state,
            country : req.body.country
        }, 
        function (err, city) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(city);
        });
});

// RETURNS ALL THE cities IN THE DATABASE
router.get('/', function (req, res) {
    City.find({}, function (err, cities) {
        if (err) return res.status(500).send("There was a problem finding the cities.");
        res.status(200).send(cities);
    });
});

// GETS A SINGLE City FROM THE DATABASE
router.get('/:id', function (req, res) {
    City.findById(req.params.id, function (err, city) {
        if (err) return res.status(500).send("There was a problem finding the city.");
        if (!city) return res.status(404).send("No city found.");
        res.status(200).send(city);
    });
});

// DELETES A City FROM THE DATABASE
router.delete('/:id', function (req, res) {
    City.findByIdAndRemove(req.params.id, function (err, city) {
        if (err) return res.status(500).send("There was a problem deleting the city.");
        res.status(200).send("City: "+ city.name +" was deleted.");
    });
});

// UPDATES A SINGLE City IN THE DATABASE
router.put('/:id', function (req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, city) {
        if (err) return res.status(500).send("There was a problem updating the city.");
        res.status(200).send(city);
    });
});


module.exports = router;