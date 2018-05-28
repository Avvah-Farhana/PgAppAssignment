
'use strict';

var _  = require('lodash');
var GirlsDetails = require ('./girlsDetails.model');
var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

//Save Girls Details
exports.saveGirlsDetails = function(req,res){
    var girlsDetails = req.body;
    console.log(girlsDetails)
    var cd = new GirlsDetails(girlsDetails);
    console.log("girlsDetails")
    console.log(girlsDetails)
    cd.save(function(err,data){
        if(!err){
            res.json({success : true});
            console.log("saved");
        }
         else{

            res.json({success : false});
            console.log("Not Saved");
         }
    })
};

//Show List of Girls
exports.ListOfGirls = function(req , res){
    GirlsDetails.find({},function (err , data){
          if(!err)
           res.json(data);
        else
           res.json({success : false});
    });
};