var user = require('../admin.json');
var volunteer = require('../volunteer.json');
const express = require("express");
const router = express.Router();

const route_prefix = '/user/';

router.get('/get', (req, res) => {
    
    console.log(route_prefix + 'get GET request for current user');
    res.json(user);
});

router.get('/get/:id', (req, res) => {
    console.log(route_prefix + `get GET request for user with id ${req.params.id}`);
    // TODO make this actually return a user obj with an id of 3
    res.json(user);
});

router.get('/list', (req, res) => {
    console.log(route_prefix + `get GET request for user list`);
    let success = [
        user,
        volunteer
    ];
    res.json(success);
});

module.exports = router;
