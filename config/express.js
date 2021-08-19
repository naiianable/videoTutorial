const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {

    app.engine('hbs', exphbs({ 
        extname: "hbs",
        defaultLayout: "",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views" 
        })
    );
    app.set('view engine', 'hbs');

    //set up body parser
    app.use(bodyParser.urlencoded({ extended: true }));

    //set up cookie parser
    app.use(cookieParser());

    //set up static files
    app.use(express.static('static'));
};