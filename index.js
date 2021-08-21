const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

//set up mongo database, create database, make sure its connected
//mongoose.connect(database info)
//let db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected!');
// });


app.listen(config.port, console.log(`Now listening on port ${config.port}`));