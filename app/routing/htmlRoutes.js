var path = require("path");
var express = require('express');
var htmlRouter = express.Router(); 

//local navigation
// module.exports = function(app){

//     app.get('/', function(req, res){
//         //takes some path and returns file back to requester
//         res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
//     });
//     app.get('/survey', function(req, res){
//         //takes some path and returns file back to requester
//         res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
//     });
// }

htmlRouter.get('/', function(req, res){
        //takes some path and returns file back to requester
        res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
    });
    htmlRouter.get('/survey', function(req, res){
        //takes some path and returns file back to requester
        res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
    });

    module.exports = htmlRouter;