/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');


var Client = require('node-rest-client').Client;
var simple = require('xml-simple');

// Get list of things
exports.create = function(req, res) {
  console.log("hi server");

  console.log('body', req.body)
  console.log('imageData', req.body.imageData); 
  var data = req.body.imageData;

  var args = {
    'image_request[image]': 'dress.jpg',
    'image_request[locale]': 'en-US',
    headers:{
      "Content-Type": "application/json",
      "Authorization": "CloudSight 51RAGqz9_ED1ExMzVG4I7Q"
      
  } 
  };
  
  var client = new Client();

  client.post("https://api.cloudsightapi.com/image_requests", args, function(data, response){
            // parsed response body as js object 
            console.log('data', data);
            // raw response 
           console.log('response',response);
        });



  return res.json(200);
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.index = function(req, res) {
  
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}