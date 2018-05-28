'use strict';

module.exports = function(app){

    //Insert routes

     app.use('/api/girls', require('./api/girls/index'))
}