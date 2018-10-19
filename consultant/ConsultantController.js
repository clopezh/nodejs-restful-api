var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
var Consultant = require('./Consultant');

//CREATES A NEW CONSULTANT
router.post('/', function (req, res) {
    Consultant.create({
        row : req.body.row,
        level : req.body.level,
        name : req.body.name
    },
    function (err, consultant) {
        if(err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(consultant);
    });
});

//RETURNS ALL THE CONSULTANTS IN THE DATABASE
router.get('/', function(req, res) {
    Consultant.find({}, function (err, consultants) {
        if (err) return res.status(500).send("There was a problem finding the consultants.");
        res.status(200).send(consultants);
    });
});

//GETS A SINGLE CONSULTANT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Consultant.findById(req.params.id, function (err, consultant) {
        if (err) return res.status(500).send("There was a problem finding the consultant.");
        if (!consultant) return res.status(404).send("No consultant found.");
        res.status(200).send(consultant);
    });
});

//DELETES A CONSULTANT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Consultant.findByIdAndRemove(req.params.id, function (err, consultant) {
        if (err) return res.status(500).send("There was a problem deleting the consultant.");
        res.status(200).send("Consultant: " + consultant.name + " was deleted.");
    });
});

//UPDATES A SINGLE CONSULTANT IN THE DATABASE
router.put('/:id', function (req, res){
    Consultant.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, consultant) {
        if (err) return res.status(500).send("There was a problem updating the consultant.");
        res.status(200).send(consultant);
    });
});

module.exports = router;